import React from 'react';
import ClassesImage from './ClassesImage';

const images = [
    {
        img: "https://res.cloudinary.com/dpnsbsfop/image/upload/v1718458397/FitnessGym/pur6kl7czwrrhrkgxqiz.png",
        name: "Weight Training Classes",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        img: "https://res.cloudinary.com/dpnsbsfop/image/upload/v1718458398/FitnessGym/ijabufetbbrjprzmbjlh.png",
        name: "Yoga Classes",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        img: "https://res.cloudinary.com/dpnsbsfop/image/upload/v1718458399/FitnessGym/el8di2zgjqmzlwrryhs6.png",

        name: "Ab Core Classes",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        img: "https://res.cloudinary.com/dpnsbsfop/image/upload/v1718458397/FitnessGym/tw8ckf1sccennx38nsfa.png",
        name: "Adventure Classes",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        img: "https://res.cloudinary.com/dpnsbsfop/image/upload/v1718458397/FitnessGym/dzz1twi1sza1f7hrduxw.png",
        name: "Fitness Classes",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        img: "https://res.cloudinary.com/dpnsbsfop/image/upload/v1718458397/FitnessGym/pdhsojihtktuz2vghegi.png",
        name: "Training Classes",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    }
    
];


const ClassesCrousel = () => {
    
    return (
        <div className="relative overflow-x-scroll scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-black w-full">
            <div className="flex flex-row whitespace-nowrap">
                {images.map((image, index) => (
                    <ClassesImage key={index} image={image} index={index}/>
                ))}
            </div>
        </div>
    );
};

export default ClassesCrousel;
