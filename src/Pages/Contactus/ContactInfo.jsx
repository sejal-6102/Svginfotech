import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

// Info cards ka data
const contactInfo = [
  {
    icon: <FiPhone />,
    title: "Phone Number",
    detail: "(309) 8855–314",
    href: "tel:3098855314"
  },
  {
    icon: <FiMail />,
    title: "Email Address",
    detail: "info@domainname.com",
    href: "mailto:info@domainname.com"
  },
  {
    icon: <FiMapPin />,
    title: "Address",
    detail: "123 Creative Lane, London, SW1A 1AA, United Kingdom",
    href: "#"
  }
];

// Reusable input component
const FormInput = ({ type = 'text', placeholder, className = '' }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`w-full bg-black/30 border border-white/10 rounded-lg px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BFF747]/50 ${className}`}
  />
);

export default function ContactForm() {
  return (
    <section className="relative bg-black text-white py-24 px-6 sm:px-8 font overflow-hidden">
      {/* Background Glow (Isse glass effect aacha dikhta hai) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vh] bg-lime-900/20 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Main content grid (z-10 se yeh glow ke upar rahega) */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* --- Left Column: Info --- */}
        <div className="flex flex-col gap-8" data-aos="fade-right">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Get in <span className="text-[#BFF747]">touch</span> with us
            </h1>
            <p className="text-gray-400 mt-4 max-w-lg">
              We'd love to hear from you! Whether you have questions, need support, or want to discuss a project, feel free to reach out.
            </p>
          </div>
          
          <div className="w-full space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.slice(0, 2).map((item) => (
                <a 
                  key={item.title} 
                  href={item.href} 
                  // ✅✅✅ GLASS EFFECT AUR BADA SIZE YAHAN ADD KIYA GAYA HAI ✅✅✅
                  className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center group"
                >
                  <div className="text-4xl text-[#BFF747] mb-5">{item.icon}</div>
                  <h3 className="font-bold text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors">{item.detail}</p>
                </a>
              ))}
            </div>
            
            <a 
              href={contactInfo[2].href} 
              // ✅ Address card par bhi glass effect daala hai
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl flex items-center text-left gap-6 group"
            >
              <div className="text-3xl text-[#BFF747] flex-shrink-0">{contactInfo[2].icon}</div>
              <div>
                <h3 className="font-bold text-lg text-white mb-1">{contactInfo[2].title}</h3>
                <p className="text-gray-400 group-hover:text-white transition-colors">{contactInfo[2].detail}</p>
              </div>
            </a>
          </div>
        </div>

        {/* --- Right Column: Form --- */}
        {/* ✅ Form par bhi glass effect daala hai */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 sm:p-10 rounded-3xl" data-aos="fade-left">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormInput placeholder="First Name" />
              <FormInput placeholder="Last Name" />
            </div>
            <FormInput type="tel" placeholder="Phone No" />
            <FormInput type="email" placeholder="E-mail" />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full bg-black/30 border border-white/10 rounded-lg px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BFF747]/50"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#BFF747] text-black font-bold text-lg py-4 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Submit Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}