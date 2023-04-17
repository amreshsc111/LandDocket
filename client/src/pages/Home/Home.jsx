import React from 'react'
import {hero} from '../../data'
import Header from './Header'

const Home = () => {
    // destructure hero data
    const { title, subtitle, image } = hero;
    return (
        <section className='min-h-[900px] py-12'>
	        <div className='container mx-auto min-h-[900px] flex justify-center items-center'>
	            <div className='flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left'>
	                {/* text */}
	                <div className='flex-1'>
	                    <h1
	                        className='title mb-2 lg:mb-5'
	                        data-aos='fade-down'
	                        data-aos-delay='500'
	                    >
	                        {title}
	                    </h1>
	                    <p
	                        className='lead mb-5 lg:mb-10'
	                        data-aos='fade-down'
	                        data-aos-delay='600'
	                    >
	                        {subtitle}
	                    </p>
                    </div>
	                {/* image */}
	                <div className='flex-1' data-aos='fade-up' data-aos-delay='800'>
	                    <img src={image} alt='' />
	                </div>
	            </div>
	        </div>
	    </section>
    )
}

export default Home;
