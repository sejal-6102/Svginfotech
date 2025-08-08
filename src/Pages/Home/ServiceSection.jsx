import React, { useEffect } from "react";
import { FaDesktop, FaLifeRing, FaLaptop } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServiceSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const services = [
    {
      icon: <FaDesktop size={30} />,
      title: "FULLY RESPONSIVE",
      desc: "Lorem ipsum dolor sit amet concateur un ricko La trube traviata non troppo bootstrap responsive themes. website design website templates."
    },
    {
      icon: <FaLifeRing size={30} />,
      title: "FRIENDLY SUPPORT",
      desc: "Lorem ipsum dolor sit amet concateur un ricko La trube traviata non troppo bootstrap responsive themes. website design website templates."
    },
    {
      icon: <FaLaptop size={30} />,
      title: "RETINA DISPLAY",
      desc: "Lorem ipsum dolor sit amet concateur un ricko La trube traviata non troppo bootstrap responsive themes. website design website templates."
    }
  ];

  return (
    <section className="py-16 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
          HELLO, WELCOME TO GRIDGUM
        </h2>
        <div className="flex flex-col items-center mt-2 space-y-[3px]">
    <div className="w-12 h-[2px] bg-black"></div>
    <div className="w-8 h-[2px] bg-gray-500"></div>
    <div className="w-6 h-[2px] bg-gray-400"></div>
  </div>

      </div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-center group"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {/* Circle with icon */}
            <div className="w-24 h-24 mx-auto flex items-center justify-center rounded-full border border-gray-300 transition-all duration-300 group-hover:bg-black group-hover:border-black">
              <span className="text-gray-500 transition-all duration-300 group-hover:text-white">
                {service.icon}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-6 text-sm font-semibold tracking-widest text-gray-700">
              {service.title}
            </h3>

            {/* Divider under title */}
            <div className="w-10 h-[2px] bg-gray-400 mx-auto mt-2"></div>

            {/* Description */}
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              {service.desc}
            </p>

            {/* Button */}
            <button className="mt-6 px-6 py-3 border border-gray-300 text-gray-600 font-semibold text-sm uppercase tracking-wide transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:border-black">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
