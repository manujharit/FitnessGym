import React from 'react'

const Footer = () => {
    return (
        <div className='bg-rose-200 w-full px-[10%] py-[3%] flex flex-col xl:flex-row justify-between'>
            <div className='flex flex-col w-[100%] xl:w-[45%] mr-[5%]'>
                <span className="font-extrabold text-[125%] text-red-800 w-[50%]">
                    FITNESS GYM
                </span>
                <span className='text-md text-justify mt-[1%]'>
                    <b className='text-rose-700'>Fitness Gym</b> is your ultimate destination for a transformative fitness experience. Our cutting-edge facilities, expert trainers, and diverse range of classes cater to all fitness levels. Unlock your full potential and embrace a healthier lifestyle with our personalized approach. Join us today and embark on a journey towards a stronger, fitter you.
                </span>
            </div>
            <div className='flex flex-row justify-center mt-[5%] xl:mt-[0%] w-[100%] xl:w-[50%] '>
                <div className='w-[50%] flex flex-col items-start'>
                    <span className="font-extrabold text-[125%] text-red-800">
                        LINKS
                    </span>
                    <a className='mt-[2%] text-rose-600 font-semibold hover:underline' href='/'>Instagram</a>
                    <a className='mt-[2%] text-rose-600 font-semibold hover:underline' href='/'>Facebook</a>
                    <a className='mt-[2%] text-rose-600 font-semibold hover:underline' href='/'>Twitter</a>
                </div>
                <div className='flex flex-col items-end w-[50%]'>
                    <span className="font-extrabold text-[125%] text-red-800 ">
                        CONTACT US
                    </span>
                    <a href='/' className='mt-[2%] text-md font-semibold text-rose-700 hover:underline'>+(000)000-0000</a>
                </div>
            </div>
        </div>
    )
}

export default Footer