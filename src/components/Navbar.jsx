import React, { useState } from 'react';
import logo from '../assets/logo.png';
import logo1 from '../assets/logo1.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu=()=>{
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center mx-2 md:mx-8 font-[700]'>
      <div className='flex justify-between items-center w-full md:w-auto'>
        <div className='flex items-center gap-5 text-[#292355] text-[16px]'>
          <h1>Track your order</h1>
          <img src={logo} alt="logo" />
        </div>
        <button className='md:hidden text-2xl' onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      <ul className={`absolute top-12 md:top-0 bg-white md:relative  w-full md:w-auto z-10 flex-col md:flex-row md:flex justify-between items-center gap-3 pb-3 md:pb-0  text-[#818181] text-[17.49px] ${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex`}>
        <li><img src={logo1} alt="logo image" className='hidden md:block'/></li>
        <li className='text-[#527442]'>Home</li>
        <li className='cursor-pointer hover:text-black'>Service</li>
        <li className='cursor-pointer hover:text-black'>About Us</li>
        <li className='cursor-pointer hover:text-black'>Login</li>
      </ul>
    </div>
  );
};

export default Navbar;
