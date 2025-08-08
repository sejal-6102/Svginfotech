import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

const gridItems = [
  {
    category: "Mock-up Design",
    title: "Lorem Ipsum",
    description:
      "Lacrimosa ter mondi prado. Sanctus benedictus oprave Atlantis mis lorem ipsum dolor sit amet.",
    imageUrl:
      "https://template-preview.com/bootstrap-templates/black-white/Black-version/images/gal1.jpg",
    aos: "fade-up",
  },
  {
    category: "Mock-up Graphic",
    title: "Lorem Ipsum",
    description:
      "Lacrimosa ter mondi prado. Sanctus benedictus oprave Atlantis mis lorem ipsum dolor sit amet.",
    imageUrl:
      "https://template-preview.com/bootstrap-templates/black-white/Black-version/images/gal2.jpg",
    aos: "fade-up",
  },
  {
    category: "Mock-up Gold Paper",
    title: "Lorem Ipsum",
    description:
      "Lacrimosa ter mondi prado. Sanctus benedictus oprave Atlantis mis lorem ipsum dolor sit amet.",
    imageUrl:
      "https://template-preview.com/bootstrap-templates/black-white/Black-version/images/gal3.jpg",
    aos: "fade-up",
  },
  {
    category: "Mock-up Silver Side",
    title: "Lorem Ipsum",
    description:
      "Lacrimosa ter mondi prado. Sanctus benedictus oprave Atlantis mis lorem ipsum dolor sit amet.",
    imageUrl:
      "https://template-preview.com/bootstrap-templates/black-white/Black-version/images/gal4.jpg",
    aos: "fade-up",
  },
];

const MockupGrid = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="bg-white font-sans py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#f4f4f4] flex flex-col items-center text-center p-6 shadow hover:shadow-lg transition-all duration-300 rounded-md"
            data-aos={item.aos}
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden rounded">
              <img
                src={item.imageUrl}
                alt={item.category}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-4">
              {item.category}
            </p>
            <h2 className="text-lg font-bold text-gray-800 mt-2">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mt-2">
              {item.description}
            </p>
            <a
              href="#"
              className="font-bold text-gray-900 inline-flex items-center group text-sm mt-3"
            >
              LEARN MORE
              <ArrowIcon />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MockupGrid;
