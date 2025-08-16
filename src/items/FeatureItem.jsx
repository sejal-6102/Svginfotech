// /components/FeatureItem.jsx

import React from 'react';

export default function FeatureItem({ icon, title, description }) {
  return (
    // 'group' क्लास यहाँ ज़रूरी है ताकि हम आखिरी आइटम से लाइन हटा सकें
   <div className="relative pl-12 group">
      {/* वर्टिकल टाइमलाइन लाइन */}
      <div 
        className="absolute left-[13px] top-0 bottom-[-6rem] w-px bg-gray-700/50 group-last:hidden"
      ></div>
      
      {/* टाइमलाइन का हरा डॉट */}
      <div className="absolute left-0 top-1 w-7 h-7 rounded-full border-2 border-[#BFF747] bg-black flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#BFF747]"></div>
      </div>
      
      {/* 
        ✅✅✅ समाधान यहाँ है ✅✅✅
        हमने '-top-10' को '-top-16' कर दिया है ताकि आइकॉन और ऊपर जाए।
      */}
     <div></div>
      {/* <div className="absolute -top-16 left-0 text-4xl text-[#BFF747] opacity-60">
        {icon}
      </div> */}
      
      {/* कंटेंट */}
       <span className="text-5xl font-bold text-[#BFF747] mb-2"  data-aos="fade-up" data-aos-anchor-placement="center-bottom">{icon}</span>
      <h3 className="text-xl font-bold text-white mb-2 font"  data-aos="fade-up" data-aos-anchor-placement="center-bottom" >{title}</h3>
      <p className="text-gray-400 leading-relaxed max-w-md font"  data-aos="fade-up" data-aos-anchor-placement="center-bottom">{description}</p>
      
    </div>
  );
}