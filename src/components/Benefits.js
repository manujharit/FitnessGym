import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BenefitCard from "./BenefitCard";
import { motion } from 'framer-motion';

const Benefits = () => {
    const card = [
        { icon: <HomeModernIcon className="h-6 w-6" />, title: "State of the Art Facilities", desc: "Our cutting-edge gym boasts top-of-the-line equipment, spacious workout areas, premium amenities, and a motivating atmosphere designed to elevate your fitness journey." },
        { icon: <UserGroupIcon className="h-6 w-6" />, title: "100's of Diverse Classes", desc: "Experience an unparalleled variety with our extensive schedule offering hundreds of diverse fitness classes catering to all interests and levels, from high-intensity workouts to mindful practices." },
        { icon: <AcademicCapIcon className="h-6 w-6" />, title: "Expert and Pro Trainers", desc: "Our team of expert and professional trainers brings a wealth of knowledge and experience, providing personalized guidance and motivation to help you achieve your fitness goals efficiently and safely." }
    ]

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div id="benefit" className="w-[100%] flex flex-col px-[10%] py-[3%] text-center xl:text-start">
            <span className="text-red-900 text-xl xl:text-3xl font-bold">MORE THAN JUST GYM.</span>
            <span className="w-[100%] xl:w-[70%] text-sm mt-[2%] text-red-900">We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</span>
            <div className="flex flex-col md:flex-row mt-[3%] justify-between">
                {card.map((card, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        variants={variants}
                        className="w-full"
                    >
                        <BenefitCard card={card} />
                    </motion.div>
                ))}
            </div>
            <div className="mt-[5%] flex">
                <div className="hidden lg:flex w-[35%]">
                    <img src="https://res.cloudinary.com/dpnsbsfop/image/upload/v1718456030/FitnessGym/q73wgygwyssarplhllcj.png" className="h-[500px] w-[400px]" />
                </div>
                <motion.div
                    className='w-[full] lg:w-[65%] flex flex-col justify-center  text-justify xl:mx-[5%]'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={variants}
                >
                    <span className="text-2xl xl:text-3xl text-red-950 font-bold">HUNDREDS OF HAPPY MEMBERS GETTING &nbsp;<span className="text-orange-600">FIT</span></span>
                    <span className="text-md text-red-900 text-wrap mt-[3%]">Our gym takes immense pride in being the chosen destination for millions of members worldwide who have embarked on their fitness journeys with us. We understand that achieving a healthier lifestyle is a deeply personal and transformative experience, and we are honored to be a part of this incredible journey for so many individuals.</span>
                    <span className="text-md text-red-900 text-wrap mt-[2%]">With a strong commitment to fostering a supportive and inclusive community, we have created an environment where members feel empowered, motivated, and celebrated at every step of their fitness journey. From beginners taking their first tentative steps towards a healthier lifestyle to seasoned fitness enthusiasts pushing their limits, our gym is a sanctuary where everyone can thrive. We take great joy in witnessing the countless success stories, the personal triumphs, and the life-changing transformations that unfold within our walls every day.</span>

                </motion.div>
            </div>
        </div>
    )
}

export default Benefits