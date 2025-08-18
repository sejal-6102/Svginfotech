import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// StatCounter हेल्पर कंपोनेंट (इसमें कोई बदलाव नहीं)
const StatCounter = ({ percentage, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref}>
      {/* स्टेप 3: छोटे स्क्रीन के लिए टेक्स्ट का साइज़ बदला गया */}
      <p className="text-4xl sm:text-5xl lg:text-6xl font-bold" style={{ color: '#BFF747' }}>
        +
        {inView ? <CountUp start={0} end={percentage} duration={2.5} /> : '0'}%
      </p>
      <p className="text-sm text-gray-400 mt-3 max-w-[200px]">{children}</p>
    </div>
  );
};

// आपका मुख्य Expertise कंपोनेंट
export default function Expertise() {
  return (
    <section className="relative w-full bg-black text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden z-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          
          {/* स्टेप 1: बॉर्डर को रिस्पॉन्सिव बनाया गया */}
          <div 
            // मोबाइल पर पतला बॉर्डर (-inset-1 => 4px)
            // sm स्क्रीन और उससे बड़ी स्क्रीन पर मोटा बॉर्डर (-inset-1.5 => 6px)
            className="absolute -inset-1 sm:-inset-4 rounded-2xl z-0"
            style={{
              background: 'linear-gradient(to bottom, #BFF747, black 90%)',
            }}
          />

          {/* कंटेंट कंटेनर */}
          <div className="relative z-10 bg-black p-6 sm:p-8 md:p-12 rounded-2xl">
            {/* स्टेप 2: ग्रिड और गैप को रिस्पॉन्सिव बनाया गया */}
            {/* यह lg (laptop) स्क्रीन पर 2-कॉलम और मोबाइल पर 1-कॉलम का लेआउट बनाएगा */}
            <div className="grid grid-cols-1 lg:grid-cols-2  items-start">
              
              {/* लेफ्ट कॉलम */}
              <div className="flex flex-col gap-10 md:gap-14">
                {/* स्टेप 3: हेडिंग के टेक्स्ट साइज़ को रिस्पॉन्सिव बनाया गया */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" data-aos="zoom-in">
                  Expertise that drives digital <span style={{ color: '#BFF747' }}>success</span>
                </h2>
                <div className="flex gap-8" data-aos="zoom-in">
                  <StatCounter percentage={60} data-aos="zoom-in">
                    By optimizing your website for search engines.
                  </StatCounter>
                  <StatCounter percentage={30} data-aos="zoom-in">
                    Rise in revenue as more visitors convert into paying customers.
                  </StatCounter>
                </div>
              </div>

              {/* राइट कॉलम */}
              {/* छोटे स्क्रीन पर यह अपने आप लेफ्ट कॉलम के नीचे आ जाएगा */}
              <div className="flex flex-col gap-8 lg:pl-12 lg:border-l lg:border-gray-800">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold" data-aos="zoom-in">
                    <span style={{ color: '#BFF747' }}>*</span> Social Media Management
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mt-2 leading-relaxed" data-aos="zoom-in">
                    Our social media management services focus on building and enhancing your brand's online presence. We create engaging content, manage your social media accounts, and analyze performance.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold" data-aos="zoom-in">
                    <span style={{ color: '#BFF747' }}>*</span> E-commerce Solutions
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mt-2 leading-relaxed" data-aos="zoom-in">
                    Our e-commerce solutions are designed to create seamless online shopping experiences. From user-friendly website design to secure payment processing and inventory management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}