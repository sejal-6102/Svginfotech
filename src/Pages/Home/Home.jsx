// Home.jsx (The Final Solution)

import React from 'react';
import Hero from './Hero';
import Navbar from '../../Components/Navbar';
import Banner from './Banner';
import AboutAgency from './AboutAgency';

export default function Home() {
  return (
    // स्टेप 1: मुख्य <main> टैग को सरल रखें, यहाँ कोई overflow नहीं।
    <main className='bg-black'>
      
      {/* 
        ✅✅✅ समाधान यहाँ है ✅✅✅
        एक नया 'div' बनाएँ जो आपके सारे सेक्शन्स को रैप करेगा।
        इस पर 'overflow-x-hidden' लगाएँ।
      */}
      <div className="">
        
        {/* अब आपके सारे कॉम्पोनेंट्स इस रैपर के अंदर हैं */}
        <div className='relative z-20'>
          <Navbar />
          <Hero />
        </div>

        <Banner />
        <AboutAgency />

      </div> 
      {/* रैपर div यहाँ खत्म होता है */}

    </main>
  );
}