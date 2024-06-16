import React from 'react'
import ClassesCrousel from './ClassesCrousel'
import { motion } from 'framer-motion'

const Classes = () => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };
    return (
        <div id="classes" className='bg-pink-50 w-[100%] mt-[5%] py-[5%]'>
            <motion.div
                className='mx-[10%] flex flex-col text-justify mb-[5%]'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={variants}
            >
                <span className='text-2xl xl:text-3xl text-red-950 font-bold'>OUR CLASSES</span>
                <span className='w-[100%] xl:w-[70%] mt-[2%] text-md text-red-900'>Our gym offers a diverse range of classes led by expert instructors, catering to all fitness levels and interests. From intense workouts to restorative practices, our comprehensive schedule provides challenging yet enjoyable experiences to help you push boundaries, nurture mind and body, and achieve your fitness goals.</span>
            </motion.div>
            <ClassesCrousel />
        </div>
    )
}

export default Classes