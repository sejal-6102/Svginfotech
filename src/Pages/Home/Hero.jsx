import { useMemo,useEffect } from "react";
import { ReactTyped } from "react-typed";

import AOS from "aos";
import "aos/dist/aos.css";





export default function Hero() {
    const typedStrings = useMemo(
    () => ["Digital World", "Creative Ideas", "Art & Design", "Modern Future"],
    []
  );

    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false,     // scroll pe ek hi bar chale
    });
  }, []);

  return (
    <div className="relative min-h-screen z-20 w-full overflow-hidden">
      {/* Video Background */}
      <video
        src="https://demo.awaikenthemes.com/assets/videos/artistic-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover scale-150"
      ></video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full"></div>

      {/* Content */}
  <div className="relative z-10 flex flex-col items-center text-white pt-44 sm:pt-44 md:pt-36 lg:pt-44 px-4">
  {/* Heading with Typed Text */}
  <h1 className="font-extralight leading-snug text-center sm:text-center md:text-left
                 text-[34px] sm:text-[35px] md:text-6xl lg:text-7xl xl:text-[100px]">
    Innovative Solutions for <br className="hidden md:block" />
    <span className="inline-block 
                     min-w-[200px] sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[550px] 
                     text-[#BFF747] font-bold">
      <ReactTyped
        strings={typedStrings}
        typeSpeed={80}
        backSpeed={40}
        backDelay={1000}
        loop
        showCursor={false}
      />
    </span>
  </h1>


        {/* Learn More Circle + Paragraph */}
<div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-20 text-center md:text-left">
  {/* Rotating Learn More Button */}
  <div className="relative flex items-center justify-center flex-shrink-0">
    <svg
      className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 animate-spin-slow"
      viewBox="0 0 100 100"
    >
      <path
        id="circlePath"
        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        fill="none"
      />
      <text>
        <textPath
          href="#circlePath"
          className="text-xs sm:text-sm tracking-[0.3em] uppercase"
          fill="white"
        >
          • LEARN MORE • LEARN MORE • LEARN MORE
        </textPath>
      </text>
    </svg>
    <div className="absolute">
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#BFF747] rounded-full flex items-center justify-center cursor-pointer shadow-lg">
        {/* Play Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-black"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>

  {/* Paragraph */}
  <div className="max-w-xl text-gray-300 leading-relaxed text-base sm:text-lg mt-6 md:mt-0">
    <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      At our Creative Digital Agency, we bring your ideas to life by crafting
      engaging, impactful digital experiences that captivate audiences and drive
      results. From innovative web design to compelling content and
      cutting-edge digital strategies.
    </p>
  </div>
</div>

        {/* Buttons */}
        <div className="mt-16 flex items-center mb-10" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <button className="bg-gray-800/50 text-white py-4 px-8 rounded-full hover:bg-gray-700/50 transition-colors duration-300">
            Get In Touch
          </button>
<div className="w-12 h-12 bg-[#BFF747] rounded-full flex items-center justify-center ml-4 cursor-pointer 
                hover:bg-white transition-colors duration-300 group">
  {/* Arrow Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-black transform transition-transform duration-300 group-hover:rotate-90"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
</div>

        </div>
      </div>
    </div>
  );
}
