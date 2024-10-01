import React from 'react';
import saulltechpng from '../../../public/point.jpg';
import Typewriter from 'typewriter-effect'; // Import the Typewriter component
import CountUp from 'react-countup'
import { Oval } from 'react-loader-spinner'; // Import the loaders



function SaulltechHero() {
    return (
        <div className='relative'>
            <img src="https://res.cloudinary.com/dubs1yuct/image/upload/f_webp/v1727790254/point_ab4oif.jpg"  loading="lazy" className='h-[87vh] sm:h-[70vh] md:h-[90vh] w-[100%]  opacity-80' alt="Location marker" />
            <div className='absolute top-3 right-2'>
                <Oval color="#00BFFF" height={50} width={50} />
                <p className='absolute text-white top-5 left-[5px] opacity-75 text-[8px]'>~saultech</p>
            </div>


            <div className='top-5 absolute  w-[100%] sm:top-[4rem] md:top-[10rem] text-white sm:flex'>
                <p className=' mb-[4rem] leading-[4rem] sm:pt-0 py-3 mx-[5%] sm:mr-0 sm:w-[70%] md:w-[50%] text-[#f4f4f4] text-[2.2rem] sm:text-[1.9rem] sm:max-w-[30rem] md:'>
                    <span className='text-7xl'>Discover <br /> </span> <span className='bg-orange-600 rounded-lg p-2'>Properties</span> that suits
                    <span><Typewriter
                        options={{
                            strings: [' your Status...', 'your family!...', 'your Lifestyle!...'],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 50,
                        }}
                    />
                    </span>


                </p>



            </div>


            <div className=" md:flex md:justify-between md:mx-[5%]  md:h-[12rem] sm:mb-[3rem]">
                <div className="flexColCenter stat absolute mt-[-16rem] sm:mt-[-18rem] px-[1rem] sm:ml-[5%]  py-4 my-4 mx-8 rounded-2xl  max-w-[30rem] sm:mx-[auto] md:mx-0 md:text-[#f4f4f4] md:max-w-[20rem] bg-[#003366] md:h-[20rem] md:rounded-sm md:border-none md:mt-[-10%] md:absolute transition-transform duration-300 hover:scale-105">

                    <span className='primaryText  leading-[1em] text-blue-300 opacity-40 text-center text-[14px]'>Our services include:</span>
                    < p className='text-[14px] text-orange-300 px-3 font-lobster md:block text-center opacity-55'>Property management <br />
                        Property appraisal and sales<br />
                        House furnishing<br />
                        Property development<br />
                        Title document perfection<br />
                        Achitectural Drawing<br />
                        Construction management<br />
                        Real estate consultancy<br />
                        Decluttering
                    </p>
                </div >
                <div className="flexColCenter mt-[10rem] sm:mt-[10rem] md:mt-[1rem] stat py-4 border-b-gray-500 border  my-4 mx-8 rounded-2xl  bg-[#f4f4f4]  max-w-[30rem] sm:mx-[auto] md:mx-0  md:w-[40%] md:ml-[45%] lg:ml-[35%] lg:mr-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <span className=''>
                        <CountUp start={1950} end={2000} duration={4} />
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>Happy Customer</span>
                </div>
                <div className="flexColCenter stat py-4 border-b-gray-500 border-[0.4px]  my-4 mx-8 rounded-2xl  bg-[#f4f4f4]  max-w-[30rem] sm:mx-[auto] md:mx-0  md:w-[40%] lg:mr-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <span>
                        <CountUp start={8800} end={9000} duration={7} />
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>Premium Products</span>
                </div >

                <div className="flexColCenter stat py-4  border-b-gray-500 border  my-4 mx-8 rounded-2xl  bg-[#f4f4f4]  max-w-[30rem] sm:mx-[auto] md:mx-0  md:w-[40%] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <span>
                        <CountUp end={20} />
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>Award Winnings</span>
                </div>
            </div>


        </div>
    );
}

export default SaulltechHero;
