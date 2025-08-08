import React from "react";
import { FaRss, FaPaintBrush, FaChartLine, FaWindows } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Ourservices() {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: <FaRss className="text-4xl text-gray-800" />,
      title: "WEB DESIGN",
      description:
        "Lorem ipsum dolor sit amet, website bootstrap responsive template, web design, graphic design photoshop, illustrator and mock-up.",
    },
    {
      icon: <FaPaintBrush className="text-4xl text-gray-800" />,
      title: "MOCK-UP DESIGN",
      description:
        "Lorem ipsum dolor sit amet, website bootstrap responsive template, web design, graphic design photoshop, illustrator and mock-up.",
    },
    {
      icon: <FaChartLine className="text-4xl text-gray-800" />,
      title: "WEB DEVELOPMENT",
      description:
        "Lorem ipsum dolor sit amet, website bootstrap responsive template, web design, graphic design photoshop, illustrator and mock-up.",
    },
    {
      icon: <FaWindows className="text-4xl text-gray-800" />,
      title: "MOBILE APPLICATION",
      description:
        "Lorem ipsum dolor sit amet, website bootstrap responsive template, web design, graphic design photoshop, illustrator and mock-up.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-800">
          OUR SERVICE
        </h2>
        {/* Decorative lines */}
        <div className="flex flex-col items-center mt-2 space-y-[3px]">
          <div className="w-12 h-[2px] bg-gray-800"></div>
          <div className="w-8 h-[2px] bg-gray-500"></div>
          <div className="w-6 h-[2px] bg-gray-400"></div>
        </div>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, concateur un prado mio. Alcatra sanseteur
          un prado
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" data-aos="fade-right">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col space-y-3 group hover:scale-105 transform transition duration-300"
            >
              {/* Icon and title */}
              <div className="flex items-center space-x-3">
                {service.icon}
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
              {/* Decorative line */}
              <div className="w-10 h-[2px] bg-gray-800"></div>
              {/* Description */}
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className="relative" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="Service"
            className="rounded-lg shadow-lg hover:scale-105 transform transition duration-500"
          />
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.3)] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
