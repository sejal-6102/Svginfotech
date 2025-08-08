
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

export default function Hero() {
  return (
    <>
      <Swiper

        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
       <div className="relative w-full h-screen overflow-hidden">
    {/* Background Video */}
    <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
      <source src="assets/videos/hero1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Foreground Content */}
    <div className="relative z-10 flex items-center justify-center h-full text-white">
       <div className="text-center py-20">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold">
        It is Easy to Create Website With
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-lg sub-head font-semibold italic">
        YourDomain.com - Minimalistic, Beautiful Bootstrap &amp; Wordpress Responsive Templates
      </p>

      {/* Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <button className="px-6 py-3 border border-white font-semibold tracking-wide hover:bg-black hover:text-white transition-all duration-300">
          LEARN MORE
        </button>
        <button className="px-6 py-3 border border-white font-semibold tracking-wide hover:bg-black hover:text-white transition-all duration-300">
          BUY THEME
        </button>
      </div>
    </div>
    </div>
  </div>
        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
