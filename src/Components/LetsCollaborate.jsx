import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import Glow from './Glow';
import FloatingImage from './FloatingImage';

// In cheezon ko public folder mein rakhein ya sahi path dein
const GRID_IMAGE_URL = 'https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/work-together-bg.png';
// Maine aapke FloatingImage component ke liye design waali sphere image ka URL daala hai
const SPHERE_IMAGE_URL = 'https://demo.awaikenthemes.com/artistics/wp-content/themes/artistics/assets/images/about-agency-bg.png';

export default function LetsCollaborate() {
  return (
    // Section ko relative banaya taaki absolute children iske andar rahen
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden font">
      
      {/* --- YEH SABSE BADA CHANGE HAI: Sabhi background elements ko ek hi div mein daalna --- */}
      {/* ✅ z-index ko theek kiya gaya: Background (z-0) hamesha neeche rahega */}
      <div className="absolute inset-0 z-0">
        {/* Aapka Glow component */}
        <Glow position="right" size={550} customStyles={{ top: '200px' }} />
        
        {/* Aapka FloatingImage component, design se match karne ke liye sphere image ke saath */}
        <FloatingImage imageUrl={SPHERE_IMAGE_URL} position="left" opacity="opacity-30" />
        
        {/* Aapki Grid Image */}
        <img 
          src={GRID_IMAGE_URL} 
          alt="Grid background" 
          className="absolute inset-0 m-auto w-full h-auto max-w-4xl opacity-10 object-contain" 
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      {/* ✅ z-10 se yeh hamesha upar rahega aur flex properties se bilkul center mein aayega */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center text-center px-4">
        
        {/* Small Heading */}
        <p 
          className="text-sm font-bold tracking-[0.3em] mb-6"
          data-aos="fade-up"
        >
          LET'S COLLABORATE
        </p>
        
        {/* Large Text and Button Container */}
        <div className="relative">
          <h1 
            className="text-6xl sm:text-8xl lg:text-9xl xl:text-[140px] font-extrabold leading-none tracking-tighter"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            LET'S WORK
          </h1>
          <h1 
            className="text-6xl sm:text-8xl lg:text-9xl xl:text-[140px] font-extrabold leading-none tracking-tighter mt-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            TOGETHER
          </h1>

          {/* Circular "Get in Touch" Button */}
       <a 
  href="#contact"
  className="absolute top-[125px] left-[430px] -translate-x-1/2 -translate-y-1/2 
             w-20 h-20 sm:w-28 sm:h-28
             bg-[#BFF747] rounded-full 
             flex flex-col items-center justify-center 
             text-black font-semibold text-center
             group transition-all duration-300 ease-in-out hover:scale-110"
>
            <FiArrowUpRight 
              className="h-6 w-6 mb-1 transition-transform duration-300 group-hover:rotate-45" 
            />
            <span className="  text-sm">Get in Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
}