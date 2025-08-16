// AboutAgency.jsx

import React from 'react';
import Glow from '../../Components/Glow'; // सुनिश्चित करें कि यह पाथ सही है

export default function New() {
  return (
    // स्टेप 1: मुख्य कंटेनर को 'relative' बनाएँ। यह Glow के लिए बाउंड्री का काम करेगा।
    // इसे कुछ ऊंचाई दें ताकि यह दिखे, जैसे min-h-screen (पूरी स्क्रीन की ऊंचाई)।
    <section className="relative min-h-screen">
      
      {/* स्टेप 2: ग्लो को यहाँ रखें। यह बैकग्राउंड में रहेगा (z-0)। */}
      <Glow position="left" />

      {/* 
        स्टेप 3: सारा कंटेंट (इमेज, टेक्स्ट) एक नए रैपर div में डालें।
        इसे 'relative' और ऊँचा 'z-index' (जैसे z-10) दें ताकि यह ग्लो के ऊपर आए।
      */}
      <div className="relative z-10">
        <img src="https://demo.awaikenthemes.com/artistics/wp-content/themes/artistics/assets/images/about-agency-bg.png" alt="background" />
        <img src="https://demo.awaikenthemes.com/artistics/wp-content/uploads/2024/11/work-together-bg.png" alt="background" />
      </div>

    </section>
  );
}