import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import './Residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
import { useEffect } from 'react'
import { useState } from 'react'

const Residencies = () => {

    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {
        const getGallery = async () => {
    
          try {
            const response = await fetch('https://saul-8bpn.onrender.com/api/v1/gallery/');
            if (response.ok) {
              const result = await response.json();
              if (Array.isArray(result.data)) {
                setGalleryData(result.data); // Save the fetched data to the state
                console.log(galleryData)
                
              } else {
                throw new Error('Unexpected data structure');
    
              }
            } else {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };
        getGallery();
      
      }, []);
    

    
	return (
	<section className="r-wrapper">
       <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
            <span className='orangeText'>Best Choices</span>
            <span className='primaryText'>Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
        <SliderButtons />
          {galleryData.slice().reverse().map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img className='border h-[13rem] ' src={card.imageUrl[0]} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: 'orange' }}>₦</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.description}</span>
              </div>
            </SwiperSlide>                ))
            }
        </Swiper>
       </div>
    </section>
)
}
export default Residencies

const SliderButtons = () =>{
    const swiper = useSwiper()
    return (
        <div className="flexCenter r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}