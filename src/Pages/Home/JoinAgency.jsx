
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Glow from "../../Components/Glow";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const socialLinks = [
  {
    icon: <FaXTwitter />,
    title: "Follow Us On Twitter",
    handle: "@artistic_official",
    link: "#"
  },
  {
    icon: <FaLinkedinIn />,
    title: "Join Us On Linked In",
    handle: "user.artistic_official",
    link: "#"
  },
  {
    icon: <FaInstagram />,
    title: "Follow On Instagram",
    handle: "@artistic_insta_official",
    link: "#"
  }
];

export default function JoinAgency() {
  return (
    <section className="relative w-full bg-black text-white py-24 px-4 sm:px-8 font">
      
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
        <Glow
          position="left"
          size={600}
          customStyles={{ top: ["300px"], left: "5%", transform: "translate(-50%, -50%)" }}
        />
        <div className="flex flex-col">
          <p className="flex items-center gap-2 text-xl font-bold tracking-widest uppercase mb-4 font" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <span className="text-[#BFF747] text-2xl">*</span> Join Agency 
          </p>
          <h1 className="text-5xl lg:text-6xl font-light leading-tight font" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            Join our <span className="text-[#BFF747] font-bold">agency</span> of creative innovators
          </h1>
        </div>
        <div className="flex flex-col items-start lg:items-end">
          <p className="text-gray-300 leading-relaxed mt-4 max-w-md text-left " data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            Join our creative community to collaborate, innovate, and thrive together. We welcome passionate individuals eager to make.
          </p>
        </div>
      </div>

    
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
 
        {socialLinks.map((link) => (
          <a 
            key={link.title}
            href={link.link}
            className="relative block p-8 rounded-3xl border border-white/10
                       group transition-all duration-300 hover:border-white/20"
          >
          <div className="absolute top-0 left-8 transform -translate-y-1/2 
             w-20 h-20 bg-[#BFF747] rounded-full 
             flex items-center justify-center text-black text-4xl
             group-hover:bg-white group-hover:scale-110 
             transition-all duration-300 ease-in-out"
 >
              {link.icon}
            </div>

            <div className="flex items-end justify-between mt-10">
              <div>
                <h3 className="text-xl font-bold text-white" data-aos="fade-up" data-aos-anchor-placement="center-bottom">{link.title}</h3>
                <p className="text-gray-500 mt-1" data-aos="fade-up" data-aos-anchor-placement="center-bottom">{link.handle}</p>
              </div>

              <div 
                className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center
                           group-hover:bg-[#BFF747] group-hover:border-[#BFF747] 
                           transition-all duration-300"
              >
                <FiArrowUpRight 
                  className="h-6 w-6 text-white group-hover:text-black group-hover:rotate-45 
                             transition-all duration-300" 
                />
              </div>
            </div>
          </a>
        ))}

      </div>
   
    </section>
  );
}