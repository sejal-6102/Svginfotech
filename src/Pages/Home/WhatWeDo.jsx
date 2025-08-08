import React, { useEffect } from "react";
import { FaApple, FaPenNib, FaDatabase, FaCloud, FaLifeRing } from "react-icons/fa";
import { TbHexagon3D } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhatWeDo() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const services = [
    { icon: <FaApple size={30} />, title: "APPLICATIONS", desc: "Mobile Application" },
    { icon: <FaPenNib size={30} />, title: "WEB DESIGN", desc: "Unique Graphic Design" },
    { icon: <TbHexagon3D size={30} />, title: "DEVELOPEMENT", desc: "Web Development" },
    { icon: <FaDatabase size={30} />, title: "PROGRAMMING", desc: "Java & PHP Programming" },
    { icon: <FaCloud size={30} />, title: "CLOUD HOSTING", desc: "Secure Cloud Hosting" },
    { icon: <FaLifeRing size={30} />, title: "24/7 SUPPORT", desc: "Fast & Friendly Team" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="grid md:grid-cols-2">
        {/* Left Side - Image with Overlay */}
        <div
          className="relative bg-cover bg-center h-[400px] md:h-full flex items-center justify-center"
          style={{ backgroundImage: `url('https://cdn.wallpapersafari.com/3/66/rtLORJ.jpg')` }} // change to your image path
          data-aos="fade-right"
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative text-center px-6 max-w-lg text-white">
            <FaPenNib size={40} className="mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-3 tracking-wider">WEB DESIGN</h2>
            <p className="text-sm mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, concateur un troppo lento, Alardo un pio secondo,
              molto brave di taro. Unprive simavare lareo drago aprave mio da la costa. Diego
              brave malkutto.
            </p>
            <button className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Right Side - Services */}
        <div className="bg-gray-50 p-10" data-aos="fade-left">
          <h3 className="text-2xl font-bold mb-6 tracking-wider">WHAT WE ARE DOING</h3>
          <div className="grid grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-start"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-gray-600 mb-2">{service.icon}</div>
                <h4 className="text-xs font-semibold tracking-widest text-gray-700">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
