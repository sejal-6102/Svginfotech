// Navbar.jsx
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaBars, FaTimes, FaTh , FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  

  return (
    <>
      <nav className='absolute w-full flex z-50 justify-between items-center px-4 sm:px-8 md:px-20 lg:px-40 py-4  bg-transparent border-b border-white/10 text-white font'>
        
        {/* Logo & Desktop Menu */}
        <div className='flex items-center gap-8 lg:gap-20'>
          <img src="assets/img/logo.png" alt="logo" className='h-14 object-contain' />
          
          {/* Desktop Links */}
          <div className='hidden md:flex gap-6 lg:gap-10 text-[16px] font-medium whitespace-nowrap'>
            <Link to="/" className="text-[#BFF747] transition">Home</Link>
            <Link to="/" className="hover:text-[#BFF747] transition">About Us</Link>

            {/* Services with Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#BFF747] transition">
                Services <IoIosArrowDown className="mt-[2px]" />
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 bg-[#BFF747] text-black rounded shadow-lg overflow-hidden min-w-[180px]">
                  <Link to="/service1" className="block px-4 py-2 hover:bg-white transition">Service 1</Link>
                  <Link to="/service2" className="block px-4 py-2 hover:bg-white transition">Service 2</Link>
                  <Link to="/service3" className="block px-4 py-2 hover:bg-white transition">Service 3</Link>
                </div>
              )}
            </div>

            <Link to="/" className="hover:text-[#BFF747] transition">Blogs</Link>
            <Link to="/" className="hover:text-[#BFF747] transition">Contact</Link>
          </div>
        </div>

        {/* Social Icons - Desktop */}
        <div className='hidden xl:flex items-center gap-4 text-2xl'>
          <Link to="/"><FaInstagram className="text-[#BFF747] hover:text-white transition-colors duration-300" /></Link>
          <Link to="/"><FaFacebookF className="text-[#BFF747] hover:text-white transition-colors duration-300" /></Link>
          <Link to="/"><FaLinkedinIn className="text-[#BFF747] hover:text-white transition-colors duration-300" /></Link>
          {/* Dots Icon */}
<button
  onClick={() => setIsSidebarOpen(true)}
  className="w-9 h-9 flex items-center justify-center 
             rounded-full bg-white/10 
             hover:bg-[#BFF747] hover:text-black 
             transition duration-300"
>
  <FaTh className="text-[14px] " />
</button>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden text-2xl cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes />
          ) : (
            <div className="p-3 bg-[#BFF747] hover:bg-white rounded text-black transition-colors duration-300 flex items-center justify-center">
              <FaBars className="text-2xl" />
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col items-start p-5 gap-3 md:hidden'>
            <Link to="/" className="w-full px-3 py-2 hover:bg-[#BFF747] transition">Home</Link>
            <Link to="/" className="w-full px-3 py-2 hover:bg-[#BFF747] transition">About Us</Link>

            {/* Mobile Dropdown */}
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex justify-between px-3 py-2 hover:bg-[#BFF747] transition"
              >
                Services <IoIosArrowDown className={`${isServicesOpen ? "rotate-180" : ""} transition`} />
              </button>
              {isServicesOpen && (
                <div className="bg-[#BFF747] text-black w-full">
                  <Link to="/service1" className="block px-4 py-2 hover:bg-white transition">Service 1</Link>
                  <Link to="/service2" className="block px-4 py-2 hover:bg-white transition">Service 2</Link>
                  <Link to="/service3" className="block px-4 py-2 hover:bg-white transition">Service 3</Link>
                </div>
              )}
            </div>

            <Link to="/" className="w-full px-3 py-2 hover:bg-[#BFF747] transition">Blogs</Link>
            <Link to="/" className="w-full px-3 py-2 hover:bg-[#BFF747] transition">Contact</Link>
          </div>
        )}
      </nav>

      {/* Sidebar */}
  <div
  className={`fixed top-0 right-0 h-full w-120 bg-[#171717]   text-white z-50 transform transition-transform duration-700 ease-in-out ${
    isSidebarOpen ? "translate-x-0" : "translate-x-full"
  }` }
  
>
  {/* Close button */}
  <div className="flex justify-end p-4 pt-10" >
    <button
      onClick={() => setIsSidebarOpen(false)}
      className="text-2xl text-white hover:text-[#BFF747]"
    >
      <FaTimes />
    </button>
  </div>

  {/* Contact Info */}
<div
  className={`overflow-y-auto h-[calc(100%-4rem)] p-6 space-y-8 
    transform transition-all duration-[8000] ease-in-out delay-700
    ${isSidebarOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
>

    {/* Phone */}
    <div className="text-center space-y-2 pt-10" >
      <LuPhoneCall   className="text-[#BFF747] text-5xl mx-auto" />
      <p className="font-bold text-[22px]" >Phone</p>
      <p className="text-[18px] text-gray-300">(309) 8855–314</p>
    </div>
    <hr className="border-gray-700 w-60 mx-auto" />

    {/* Email */}
    <div className="text-center space-y-2">
      <FaEnvelope className="text-[#BFF747] text-4xl mx-auto" />
      <p className="font-bold text-[22px]">Email</p>
      <p className="text-[18px] text-gray-300">info@domainname.com</p>
    </div>
    <hr className="border-gray-700 w-60 mx-auto" />

    {/* Address */}
    <div className="text-center space-y-2">
      <FaMapMarkerAlt className="text-[#BFF747] text-4xl mx-auto" />
      <p className="font-bold text-[22px]">Address</p>
      <p className="text-[18px] text-gray-300">
        123 Creative Lane London, SW1A 1AA <br />Jaipur
      </p>
    </div>
    <hr className="border-gray-700  w-60 mx-auto" />
        <div className="text-center space-y-2">

      <p className="font-bold text-[22px]">Stay Connected</p>
      <p className="text-[18px] text-gray-300">
           <div className='flex justify-center items-center gap-6 text-3xl mb-10'>
          <Link to="/"><FaInstagram className="text-[#BFF747] hover:text-white transition-colors duration-300" /></Link>
          <Link to="/"><FaFacebookF className="text-[#BFF747] hover:text-white transition-colors duration-300" /></Link>
          <Link to="/"><FaLinkedinIn className="text-[#BFF747] hover:text-white transition-colors duration-300" /></Link>
          </div>
      </p>
    </div>

  </div>
</div>
    </>
  );
}
