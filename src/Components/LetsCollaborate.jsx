import React from 'react';
import Glow from "./Glow";
import FloatingImage from "./FloatingImage";

// ✅ YAHAN APNI VIDEO KA SAHI PATH DAALEIN
const BACKGROUND_VIDEO_URL = 'assets/videos/lets.mp4'; 
const AGENCY_IMAGE_URL = 'https://demo.awaikenthemes.com/artistics/wp-content/themes/artistics/assets/images/why-choose-bg-shape.png';

export default function VideoHeroSection() {
  return (
    // Main container jo poori screen ki height lega aur content ko center karega
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center text-white">

       {/* Background Glows and Images (Yeh peeche rahenge) */}
       <div className="absolute inset-0 z-0">
         <Glow position="right" size={300} customStyles={{ top: "290px",right:"-220px" }} />
         <FloatingImage imageUrl={AGENCY_IMAGE_URL} position="left" opacity="opacity-30" />
       </div>
      
      {/* --- CONTENT CONTAINER --- */}
      {/* Yeh div sabhi content ko hold karega */}
      <div className="relative  w-full flex flex-col items-center justify-center px-4">
        
        {/* Small Heading */}
        <p 
          className="text-sm font-bold tracking-[0.3em] mb-8"
          data-aos="fade-down"
        >
          LET'S COLLABORATE
        </p>

        {/* ✅✅✅ YEH SABSE BADA CHANGE HAI ✅✅✅ */}
        
        {/* VIDEO CONTAINER (Sirf badi screen par dikhega) */}
        <div className="hidden lg:block w-[80%] max-w-7xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
            src={BACKGROUND_VIDEO_URL}
          >
            Aapka browser video tag ko support nahi karta.
          </video>
        </div>

        {/* TEXT FALLBACK (Sirf choti screen par dikhega) */}
        <div className="lg:hidden">
          <h1 
            className="text-6xl sm:text-8xl font-extrabold leading-none tracking-tighter"
            data-aos="fade-up"
          >
            LET'S WORK
          </h1>
          <h1 
            className="text-6xl sm:text-8xl font-extrabold leading-none tracking-tighter mt-2 sm:mt-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            TOGETHER
          </h1>
        </div>
        
      </div>
    </section>
  );
}