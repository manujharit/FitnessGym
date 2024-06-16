import React from 'react'

const ClassesImage = ({ image, index }) => {
    return (
        <div className=" flex-none w-[50%] xl:w-[30%] h-[200px] xl:h-[350px] mx-[5%] xl:mx-[1.5%]">
            <img
                src={image.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[200px] xl:h-[350px] mr-[3%]"
            />
            <div className="relative static -top-[200px] xl:-top-[350px] h-[200px] xl:h-[350px] z-10 flex flex-col  inset-0 bg-red-400 bg-opacity-90 text-wrap text-justify p-1 xl:p-4 opacity-0 hover:opacity-100 focus:opacity-100 transition-opacity duration-500 ease-in-out">
                <span className='text-md xl:text-xl font-bold xl:pt-[10%]'>{image.name}</span>
                <p className="text-xs xl:text-md text-black ">{image.description}</p>
            </div>
        </div>
    )
}

export default ClassesImage