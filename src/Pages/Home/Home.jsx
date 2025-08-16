// Home.jsx (The Final Solution)

import React from 'react';
import Hero from './Hero';
import Navbar from '../../Components/Navbar';
import Banner from './Banner';
import AboutAgency from './AboutAgency';
import OurServices from './OurServices';
import JoinAgency from './JoinAgency';

export default function Home() {
  return (
  
    <main className='bg-black'>
      
     
      <div className="">
        
      
        <div className='relative z-20'>
          <Navbar />
          <Hero />
        </div>

        <Banner />
        <AboutAgency />
        <OurServices />
        <JoinAgency />

      </div> 
      {/* रैपर div यहाँ खत्म होता है */}

    </main>
  );
}