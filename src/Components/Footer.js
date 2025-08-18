import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { FaPinterestP, FaXTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import Glow from './Glow';

// Logo ko ek alag component banana aachi practice hai
const ArtisticLogo = () => (
  <div className="flex items-center gap-2">
    <svg width="49" height="56" viewBox="0 0 49 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
        <path d="M24.5 0L48.5211 14V23.3333L24.5 9.33333L0.478882 23.3333V14L24.5 0Z" fill="#BFF747"/>
        <path d="M24.5 14L48.5211 28V37.3333L24.5 23.3333L0.478882 37.3333V28L24.5 14Z" fill="#BFF747"/>
        <path d="M24.5 28L48.5211 42V51.3333L24.5 37.3333L0.478882 51.3333V42L24.5 28Z" fill="#BFF747"/>
    </svg>
    <span className="text-3xl font-bold text-white">artistic.</span>
  </div>
);

// Links aur Social Icons ka data, taaki code saaf rahe
const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Blog', href: '#' },
];

const supportLinks = [
  { name: 'Contact us', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Career', href: '#' },
  { name: 'Help', href: '#' },
];

const socialIcons = [
  { icon: <FaPinterestP />, href: '#' },
  { icon: <FaXTwitter />, href: '#' },
  { icon: <FaFacebookF />, href: '#' },
  { icon: <FaInstagram />, href: '#' },
];

export default function Footer() {
  return (
    <footer className=" relative bg-black text-white font">
     <div className="absolute inset-0 z-0">
            <Glow position="left" size={600} customStyles={{ top: "10px" }} />
           
          </div>
        <hr className="border-t border-white/20 w-full" />
      <div className="max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:py-24">
     
        {/* --- Top Section with all columns --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-8">
            <ArtisticLogo />
            <div className="space-y-4 text-xl">
              <a href="tel:(309) 8855–314" className="flex items-center gap-3 group">
                <BsTelephone className="text-[#BFF747] text-xl" />
                <span className="group-hover:text-white transition-colors">(309) 8855–314</span>
              </a>
              <a href="mailto:info@domainname.com" className="flex items-center gap-3 group">
                <HiOutlineEnvelope className="text-[#BFF747] text-lg" />
                <span className="group-hover:text-white transition-colors">info@domainname.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Link</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Support</h3>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Subscribe Our Newsletter</h3>
            <form className="flex flex-col sm:flex-row gap-2 mb-6">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-[#1C1C1C] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#BFF747]/50"
              />
              <button 
                type="submit" 
                className="bg-[#BFF747] text-black font-bold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-3">
              {socialIcons.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full text-white hover:bg-[#BFF747] hover:text-black hover:border-[#BFF747] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* --- Bottom Section with Copyright --- */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p>Copyright © 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}