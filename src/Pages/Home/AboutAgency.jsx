

import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { VscSymbolMisc } from "react-icons/vsc";
import { IoCubeOutline } from "react-icons/io5";
import { RiStackFill } from "react-icons/ri";
import { HiOutlineCircleStack } from "react-icons/hi2";

import FeatureItem from '../../items/FeatureItem';
import Glow from '../../Components/Glow';
import FloatingImage from '../../Components/FloatingImage';

const AGENCY_IMAGE_URL = 'https://demo.awaikenthemes.com/artistics/wp-content/themes/artistics/assets/images/about-agency-bg.png';

const features = [
  {
    icon: <VscSymbolMisc />,
    title: 'Your Success, Our Mission',
    description: 'We measure our success by the success of our clients. With a focus on results and a dedication to quality, our mission is to deliver digital solutions that make a real impact.',
  },
  {
    icon: <IoCubeOutline />,
    title: 'Creators Of Digital Excellence',
    description: 'At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.',
  },
  {
    icon: <RiStackFill />,
    title: 'Creators Of Digital Excellence',
    description: 'At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.',
  },
  {
    icon: <HiOutlineCircleStack />,
    title: 'Creators Of Digital Excellence',
    description: 'At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.',
  },
];

export default function AboutAgency() {

  return (
    <section className="relative bg-black text-white py-24 px-4 sm:px-8 md:px-16 ">

      <div className="absolute inset-0 overflow-hidden z-10">
      <Glow position="right" size={600}  customStyles={{top: '400px' }} />
        <FloatingImage imageUrl={AGENCY_IMAGE_URL} position="left" opacity="opacity-30" />
        </div>
        
     
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        
       
        <div className="lg:sticky top-20 flex flex-col">
          <p className="flex items-center gap-2 text-xl font-bold tracking-widest uppercase text-white mb-6">
            <span className="text-[#BFF747] text-2xl">*</span> ABOUT AGENCY
          </p>
          <h2 className="text-5xl lg:text-6xl font-light leading-tight">
            Crafting <span className="text-[#BFF747] font-bold">unique digital</span> experiences that elevate your brand
          </h2>
          
          <div className="mt-12 flex items-center">
            <button className="bg-gray-800/50 text-white py-4 px-8 rounded-full hover:bg-gray-700/50 transition-colors duration-300">
              Contact Us
            </button>
            <div className="w-12 h-12 bg-[#BFF747] rounded-full flex items-center justify-center ml-4 cursor-pointer">
              <FiArrowUpRight className="h-6 w-6 text-black" />
            </div>
          </div>
          
      
          <div className="absolute top-64  -z-10">
           
          </div>
        </div>

      
        <div className="mt-16 lg:mt-0">
          <div className="space-y-24">
            {features.map((feature, index) => (
              <FeatureItem 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}