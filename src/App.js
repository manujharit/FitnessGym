import Benefits from "./components/Benefits"
import Classes from "./components/Classes"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import React, { useState, useEffect } from "react"

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div className="flex flex-col w-[100%] h-screen">
      <div className="h-[10%]"><Navbar isScrolled={isScrolled} /></div>
      <div className=" overflow-y-auto max-h-[90%] h-[90%]">
        <Home />
        <Benefits />
        <Classes />
        <ContactUs/>
        <Footer />
      </div>
    </div>
  )
}

export default App