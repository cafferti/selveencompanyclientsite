import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import saulltechpng from '../../../public/point.jpg';
import Typewriter from 'typewriter-effect'; // Import the Typewriter component

function SaulltechHero() {
    return (
        <div className='relative'>
            <img src={saulltechpng} className='h-[87vh] sm:h-[70vh] md:h-[90vh] w-[100%]  opacity-80' alt="Location marker" />


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

                <div className='pt-0 sm:flex sm:flex-col sm:mr-[5%] md:w-[50%] '>
                    <div className="flex sm:self-end md:self-start sm:mr-0  justify-around mx-[5%] items-center w-[fit-content] h-[4rem] rounded-lg my-2 bg-[#f4f4f4] sm:h-[3rem]">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input className='focus:outline-none p-[1rem] sm:p-[0px] bg-[#f4f4f4]' type="text" placeholder="Enter location" />
                        <button className='button h-[3rem] sm:h-[80%] mr-3 sm:px-2'>Search</button>
                    </div>
                    <div className="relative">
                        <ul className="text-orange-300 ml-[5%] relative z-10">
                            <li className="text-xl sm:text-right md:text-left pb-5">Find a variety of properties that suit you easily</li>
                            <li className="text-xl sm:text-right md:text-left">Forget all the difficulties in finding a home for you</li>
                        </ul>
                        <div className="absolute inset-0 bg-slate-700 opacity-50 z-0"></div>
                    </div>
                </div>

            </div>

            <p> </p>
        </div>
    );
}

export default SaulltechHero;
