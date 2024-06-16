import { useState } from 'react';

const Navbar = ({ isScrolled }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const Links = [
        { name: 'Home', link: "#home" },
        { name: 'Benefits', link: "#benefit" },
        { name: 'Our Classes', link: "#classes" },
        { name: 'Contact Us', link: "#contactus" },
    ];

    return (
        <div className={`z-20 fixed top-0 flex items-center w-full h-[10%] px-[7%] ${isScrolled ? 'shadow-sm shadow-gray-300 bg-pink-100' : 'bg-pink-50'}`}>
            <div className="font-extrabold text-125% text-red-800 w-2/3">
                FITNESS GYM
            </div>
            <div className="hidden xl:flex w-1/3 justify-between">
                {Links.map(link => <a href={link.link} key={link.name} className="text-red-900 hover:text-red-400">{link.name}</a>)}
            </div>
            <div className="xl:hidden w-1/3 text-end">
                <button onClick={toggleDropdown} className="text-red-900  font-extrabold text-2xl hover:text-red-400">{isOpen?'X':'≡'}</button>
                {isOpen && (
                    <div className="absolute top-[90%] right-0 bg-pink-50 shadow-md mt-2 py-2 w-48 h-screen">
                        {Links.map(link => (
                            <a href={link.link} key={link.name} className="block px-4 py-2 text-lg font-bold text-red-900 hover:text-red-400 hover:bg-gray-100">{link.name}</a>
                        ))}
                    </div>
                )}
            </div>
            <div className="hidden xl:flex w-1/5 justify-center items-center">
                <a href="#contactus" className="border font-semibold rounded-xl bg-yellow-400 text-red-900 py-[2%] px-[10%] hover:shadow-md hover:border">Become a Member</a>
            </div>
        </div>
    );
}

export default Navbar;
