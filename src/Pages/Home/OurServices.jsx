// OurServices.jsx (Final Corrected Code)

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiArrowUpRight } from 'react-icons/fi';
import Glow from '../../Components/Glow';

export default function OurServices() {
  // AOS (Animate on Scroll) को शुरू करें
  useEffect(() => {
    AOS.init({
      duration: 1000, // एनीमेशन की स्पीड
      once: true,     // एनीमेशन सिर्फ़ एक बार चले
    });
  }, []);

  return (
    // मुख्य सेक्शन: relative ताकि अंदर के absolute एलिमेंट्स सही से काम करें
    <section className="relative w-full bg-black text-white py-24 px-4 sm:px-8">
      
      {/* बैकग्राउंड में ग्लो इफ़ेक्ट */}
      <Glow 
        position="left" 
        size={600} 
        customStyles={{ top: '50%', left: '10%', transform: 'translate(-50%, -50%)' }} 
      />
      


      {/* मुख्य कंटेंट कंटेनर */}
      <div 
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        
        {/* लेफ्ट कॉलम: हेडिंग */}
        <div className="flex flex-col">
          <p 
            className="flex items-center gap-2 text-xl font-bold tracking-widest uppercase mb-4"
            data-aos="fade-up"
          >
            <span className="text-[#BFF747] text-2xl">*</span> OUR SERVICES
          </p>
          <h1 
            className="text-3xl sm:text-6xl lg:text-5xl font-light leading-tight font  "
            data-aos="fade-up"
            data-aos-delay="100" // थोड़ा सा delay
          >
            Our <span className="text-[#BFF747] font-bold">digital services</span> to grow your brand
          </h1>
        </div>

        {/* राइट कॉलम: डिस्क्रिप्शन और बटन */}
        <div 
          className="flex flex-col items-start "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className=" text-gray-300 justify-center item-center leading-relaxed mt-4">
            Join our creative community to collaborate, innovate, and thrive together. We welcome passionate individuals eager to make.
          </p>
          
          <div className="mt-10 flex items-center">
            {/* बटन 1: ग्रेडिएंट होवर के साथ */}
            <button 
              className="relative bg-gray-800 text-white font-semibold py-4 px-8 rounded-full 
                         overflow-hidden group"
            >
              {/* ग्रेडिएंट के लिए बैकग्राउंड लेयर */}
              <span 
                className="absolute inset-0 bg-gradient-to-r from-[#BFF747] to-green-400 
                           transform -translate-x-full group-hover:translate-x-0 
                           transition-transform duration-500 ease-in-out"
              ></span>
              {/* टेक्स्ट के लिए लेयर (ताकि वह ग्रेडिएंट के ऊपर रहे) */}
              <span className="relative">All Services</span>
            </button>
            
            {/* बटन 2: एरो के साथ */}
            <div 
              className="w-14 h-14 bg-[#BFF747] rounded-full flex items-center justify-center ml-4 
                         cursor-pointer group hover:scale-110 transition-transform duration-300"
            >
              <FiArrowUpRight className="h-6 w-6 text-black group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}