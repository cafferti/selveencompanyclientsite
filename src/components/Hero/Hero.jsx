'use client';

import React, { useState, useEffect } from 'react'
import './Hero.css'
import CountUp from 'react-countup'
import { motion } from "framer-motion"

const Hero = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	const images = [
		'/home/user/selveencompanyclientsite/public/_MG_1330.jpg',
		'/home/user/selveencompanyclientsite/public/_MG_1343.jpg',
		'/home/user/selveencompanyclientsite/public/r2.png',
		'/home/user/selveencompanyclientsite/public/r3.png'
	]

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
		}, 5000)
		return () => clearInterval(interval)
	}, [])

	return (
		<section className="hero-wrapper" style={{
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${images[currentImageIndex]}')`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundAttachment: 'fixed',
			transition: 'background-image 1s ease-in-out'
		}}>
			<div className="paddings innerWidth flexCenter hero-container">
				{/* left side */}
				<div className="flexColStart hero-left">
					<div className="hero-title">
						<div className="orange-circle"/>

						<motion.h1
							initial={{ y: '2rem', opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								duration: 2,
								type: 'spring'
							}}
							className="hero-heading"
						>
							Discover <br/>Most Suitable<br/> Property
						</motion.h1>
					</div>
					<div className="flexColStart hero-des">
						<span className='secondaryText'>Find a variety of properties that suit you easily</span>
						<span className='secondaryText'>Forget all the difficulties in finding a home for you</span>
					</div>

					<div className="flexCenter stats">
						<div className="flexColCenter stat">
							<span className="stat-number">
								<CountUp start={8800} end={9000} duration={7}/>
								<span>+</span>
							</span>
							<span className='secondaryText'>Premium Products</span>
						</div>
						<div className="flexColCenter stat">
							<span className="stat-number">
								<CountUp start={1950} end={2000} duration={4}/>
								<span>+</span>
							</span>
							<span className='secondaryText'>Happy Customer</span>
						</div>
						<div className="flexColCenter stat">
							<span className="stat-number">
								<CountUp end={20}/>
								<span>+</span>
							</span>
							<span className='secondaryText'>Award Winnings</span>
						</div>
					</div>
				</div>

				{/* right side - Image carousel indicator */}
				<div className="flexCenter hero-right">
					<motion.div 
						initial={{ x: '7rem', opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{
							duration: 2, 
							type: 'spring'
						}}
						className="carousel-indicator"
					>
						<div className="carousel-dots">
							{images.map((_, index) => (
								<div
									key={index}
									className={`dot ${index === currentImageIndex ? 'active' : ''}`}
									onClick={() => setCurrentImageIndex(index)}
								/>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Hero
