import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <div id="home" className='w-[100%] flex flex-col md:flex-row  items-center bg-pink-50'>
            <div className='w-[100%] md:w-[50%] flex flex-col text-center items-center  xl:text-start h-[500px] relative'>
                <span className='hidden md:flex text-[500%] xl:text-[1000%] font-extrabold text-gray-200 absolute top-1/3 xl:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>EVOLVE</span>
                <motion.div 
                    className='z-10 mt-[30%] xl:ml-[19%] flex flex-col'
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className='font-extrabold xl:text-7xl text-3xl  text-red-950'>FITNESS GYM</span>
                    <span className='text-2xl xl:text-5xl text-red-800 '>evolutionary fitness.</span>
                    <span className='text-xs xl:text-sm text-red-800 mt-[2%] mx-[10%] xl:mx-[0px]'>Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.</span>
                    <div className='flex flex-row mt-[2%] justify-between items-center w-[60%] xl:w-[40%] mx-[20%] xl:mx-[0px]'>
                        <a href="#contactus" className='px-[10%] xl:px-[15%] border bg-yellow-500 rounded-xl py-[2%]'>Join Now</a>
                        <a href="#benefit" className='text-orange-600 underline font-bold'>Learn More</a>
                    </div>
                </motion.div>
            </div>
            <div className='hidden md:flex w-[50%] bg-pink-50 justify-end mr-[5%]'>
                <img src='https://res.cloudinary.com/dpnsbsfop/image/upload/v1718450697/FitnessGym/nftt7tgtkheicz2p5txi.png' className='mt-[10%] h-[500px] w-[600px] ' />
            </div>
        </div>
    )
}

export default Home 