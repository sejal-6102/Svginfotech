import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';
import Glow from "../../Components/Glow";

const featuresData = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920&auto-format&fit=crop',
    title: 'Custom Branding Solutions',
    description: 'Unique brand identity development, including logos, color palettes.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto-format&fit=crop',
    title: 'Data-Driven Digital Marketing',
    description: 'Strategies combining SEO, PPC, content marketing.',
  },
];

const companyLogos = [
  { name: 'Fiverr', imageUrl: 'https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/agency-supports-logo-6-1.svg' },
  { name: 'Behance', imageUrl: 'https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/agency-supports-logo-2-1.svg' },
  { name: 'Trello', imageUrl: 'https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/agency-supports-logo-3-1.svg' },
  { name: 'Slack', imageUrl: 'https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/agency-supports-logo-4-1.svg' },
  { name: 'Asana', imageUrl: 'https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/agency-supports-logo-5-1.svg' },
  { name: 'Upwork', imageUrl: 'https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/agency-supports-logo-1-1.svg' },
];

const FeatureCard = ({ imageUrl, title, description }) => (
  <div className="bg-[#1C1C1C] rounded-3xl p-6 sm:p-8 flex flex-col group" data-aos="fade-up">
    <div className="relative rounded-2xl overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent transform -translate-x-full -skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
    </div>
    <div className="mt-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export default function FeaturesSection() {
  return (
    <section className="relative w-full bg-black text-white py-24 px-6 sm:px-8 overflow-hidden font">
      <div className="max-w-7xl mx-auto">
        <div className="absolute inset-0 z-0">
          <Glow position="right" size={600} customStyles={{ top: "290px", opacity: 0.4 }} />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 lg:mb-24">
          <div data-aos="fade-right">
            <p className="flex items-center gap-2 text-xl font-bold tracking-[0.2em] uppercase mb-4"><span className="text-[#BFF747] text-2xl">*</span> WHY CHOOSE</p>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">Innovative <span className="text-[#BFF747]">features</span> for your digital success<span className="text-gray-600">.</span></h1>
          </div>
          <div className="flex flex-col items-start lg:items-start gap-6" data-aos="fade-left">
            <p className="text-gray-400 leading-relaxed max-w-md text-left lg:text-left">Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.</p>
            <a href="#" className="flex items-center gap-4 group"><span className="bg-[#2A2A2A] text-white font-semibold py-3 px-6 rounded-full group-hover:bg-[#333333] transition-colors">Learn More</span><div className="w-12 h-12 bg-[#BFF747] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"><FiArrowUpRight className="h-6 w-6 text-black group-hover:rotate-45 transition-transform" /></div></a>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresData.map((feature, index) => <FeatureCard key={index} {...feature} />)}
        </div>
        
        <div className="relative z-10 mt-16 lg:mt-24 max-w-7xl mx-auto bg-[#1A1A1A] rounded-3xl p-8 sm:p-12" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-start text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Content Creation And Strategy</h2>
              <p className="text-gray-400 leading-relaxed max-w-lg">High-quality, engaging content across blogs, videos, and graphics designed to captivate and retain audiences.</p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <a href="#" className="relative w-36 h-36 flex items-center justify-center text-center group">
                <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100"><path id="circlePath" fill="none" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" /><text><textPath href="#circlePath" startOffset="50%" textAnchor="middle" className="fill-[#BFF747] text-xs font-semibold tracking-widest uppercase">Get free consultation · Get free consultation ·</textPath></text></svg>
                <FaArrowLeft className="text-white text-2xl group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="my-10 border-t border-gray-800"></div>

          {/* ✅✅✅ YEH NAYA "INFINITE MARQUEE" LOGO SLIDER HAI ✅✅✅ */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
            {/* Pehli List */}
            <ul className="flex items-center justify-center animate-marquee">
              {companyLogos.map((logo, index) => (
                <li key={index} className="mx-4 flex-shrink-0">
                  <div className="w-40 h-24 bg-[#2A2A2A] rounded-2xl flex items-center justify-center p-4">
                    <img src={logo.imageUrl} alt={logo.name} className="max-h-8 w-auto" />
                  </div>
                </li>
              ))}
            </ul>
            {/* Doosri List (Seamless Loop ke liye) */}
            <ul className="flex items-center justify-center animate-marquee" aria-hidden="true">
              {companyLogos.map((logo, index) => (
                <li key={index + companyLogos.length} className="mx-4 flex-shrink-0">
                  <div className="w-40 h-24 bg-[#2A2A2A] rounded-2xl flex items-center justify-center p-4">
                    <img src={logo.imageUrl} alt={logo.name} className="max-h-8 w-auto" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}