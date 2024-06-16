import { useState } from "react"

const ContactUs = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleChange = (event, field) => {
        event.preventDefault()
        switch (field) {
            case "name": setName(event.target.value); break;
            case "email": setEmail(event.target.value); break;
            case "message": setMessage(event.target.value); break;
            default: break;
        }
    }
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };
    return (
        <div id="contactus" className="flex flex-row w-full my-[5%] px-[10%] xl:px-[5%]">
            <div className="w-[100%] xl:w-[70%] flex flex-col xl:pr-[5%]">
                <span className="text-xl xl:text-3xl font-bold text-red-900">JOIN NOW TO GET IN SHAPE</span>
                <p className="text-sm xl:text-md mt-[2%] text-justify ">Stay connected with <b>FITNESS GYM</b> and let us be your guide on the path to a healthier you. Our friendly and knowledgeable staff is eager to answer your questions, provide personalized advice, and help you discover the perfect fitness routine. Get in touch with us today through our convenient online form, by email, or by giving us a call. We're here to support you every step of the way on your fitness journey.</p>
                <input type="text" className="w-[100%] lg:w-[70%] rounded-lg mt-[5%] bg-rose-300 text-black font-semibold placeholder-white focus:bg-blue-200 focus:outline-none focus:placeholder-transparent" placeholder="NAME" value={name} onChange={(event) => handleChange(event, 'name')} />
                <input type="text" className="w-[100%] lg:w-[70%] rounded-lg mt-[2%] bg-rose-300 text-black font-semibold placeholder-white focus:bg-blue-200 focus:outline-none focus:placeholder-transparent" placeholder="EMAIL" value={name} onChange={(event) => handleChange(event, 'email')} />
                <textarea type="text" rows='5' className="w-[100%] lg:w-[70%] rounded-lg mt-[2%] bg-rose-300 text-black font-semibold placeholder-white focus:bg-blue-200 focus:outline-none focus:placeholder-transparent" placeholder="MESSAGE" value={name} onChange={(event) => handleChange(event, 'name')} />
                <button className="w-[30%] xl:w-[15%] px-[3%] border rounded-lg bg-yellow-400 py-[1%] mt-[3%] hover:border hover:shadow-md hover:">SUBMIT</button>
            </div>
            <div className="hidden xl:flex w-[30%] justify-center items-center">
                <img src="https://res.cloudinary.com/dpnsbsfop/image/upload/v1718523612/FitnessGym/tyjoljlegxfdxquvxtu8.png" className="rounded-2xl" />
                </div>
        </div>
    )
}

export default ContactUs