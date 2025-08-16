

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowUpRight } from "react-icons/fi";
import Glow from "../../Components/Glow";
import { IoDiamondOutline } from "react-icons/io5";
import { HiOutlinePresentationChartLine, HiOutlineLightBulb } from "react-icons/hi";

export default function OurServices() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     once: true,
  //   });
  // }, []);

  const services = [
    {
      icon: <IoDiamondOutline />,
      title: "Branding And Identity",
      desc: "Developing a compelling brand identity through strategy, visuals, and to build strong customer connections."
    },
    {
      icon: <HiOutlinePresentationChartLine />,
      title: "Digital Marketing",
      desc: "Improve your website visibility and rank higher on search engines through our tailored SEO and marketing strategies."
    },
    {
      icon: <HiOutlineLightBulb />,
      title: "Creative Content Production",
      desc: "Create, schedule, and analyze engaging content to grow your brand's presence across all digital platforms."
    }
  ];
  const cardBgImageUrl = "https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/service-bg.svg";

  return (
    <section className="relative w-full bg-black text-white py-24 px-4 sm:px-8 font">
      
      {/* ---------- हिस्सा 1: बैनर (इसमें कोई बदलाव नहीं) ---------- */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <Glow
          position="left"
          size={600}
          customStyles={{ top: "50%", left: "5%", transform: "translate(-50%, -50%)" }}
        />
        <div className="flex flex-col">
          <p className="flex items-center gap-2 text-xl font-bold tracking-widest uppercase mb-4 font" >
            <span className="text-[#BFF747] text-2xl">*</span> OUR SERVICES
          </p>
          <h1 className="text-3xl sm:text-6xl lg:text-5xl font-light leading-tight font" >
            Our <span className="text-[#BFF747] font-bold">digital services</span> to grow your brand
          </h1>
        </div>
        <div className="flex flex-col items-start" >
          <p className="text-gray-300 leading-relaxed mt-4">
            Join our creative community to collaborate, innovate, and thrive together. We welcome passionate individuals eager to make.
          </p>
          <div className="mt-10 flex items-center font">
            <button className="relative bg-gray-800 text-white font-semibold py-4 px-8 rounded-full overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-[#BFF747] to-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative">All Services</span>
            </button>
            <div className="w-14 h-14 bg-[#BFF747] rounded-full flex items-center justify-center ml-4 cursor-pointer group hover:scale-110 transition-transform duration-300">
              <FiArrowUpRight className="h-6 w-6 text-black group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- हिस्सा 2: सर्विस कार्ड्स (पूरी तरह से नया) ---------- */}
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* बैकग्राउंड में ग्लो */}
       

        {/* सर्विस कार्ड्स के लिए ग्रिड */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {services.map((service, i) => (
            <div 
              key={i} 
              className="relative flex flex-col justify-between p-8 rounded-3xl h-[350px]
                         bg-neutral-900/50 border border-white/10 backdrop-blur-sm
                         group hover:-translate-y-2 transition-transform duration-300"

                           style={{ 
                backgroundImage:`url('${cardBgImageUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
             
            >
              {/* ऊपर का हिस्सा: आइकॉन और एरो */}
              <div className="flex items-start justify-between">
                <span className="text-5xl text-[#BFF747]"  data-aos="fade-up" data-aos-anchor-placement="center-bottom">{service.icon}</span>
                <div className="text-3xl text-[#BFF747] group-hover:rotate-45 transition-transform duration-300">
                  <FiArrowUpRight />
                </div>
              </div>
              
              {/* नीचे का हिस्सा: टाइटल और डिस्क्रिप्शन */}
              <div>
                <h2 className="text-2xl font-bold mb-3 font"  data-aos="fade-up" data-aos-anchor-placement="center-bottom">{service.title}</h2>
                <p className="text-gray-400 leading-relaxed font"  data-aos="fade-up" data-aos-anchor-placement="center-bottom">{service.desc}</p>
              </div>
            </div>
          ))}

        </div>
        <span className=" md-flex block  justify-center text-center items-center p-5 font">Let’s make something great work together.<span className="text-[#BFF747]">Get Free Quote</span></span>
      </div>
    </section>
  );
}