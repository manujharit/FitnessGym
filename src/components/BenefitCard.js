

const BenefitCard = ({card : {icon,title,desc}}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center border border-solid border-red-800 p-[3%] h-[100%] w-[90%] mx-[5%] my-[5%]">
        <span className=" p-[5%] bg-pink-50 rounded-full border border-solid border-red-900 mb-[5%]">{icon}</span>
        <span className="text-md text-red-900 font-bold">{title}</span>
        <span className="text-sm text-red-900 mt-[3%]">{desc}</span>
        <a href="#contactus" className="text-red-500 underline font-bold mt-[2%]">Learn More</a>
    </div>
  )
}

export default BenefitCard