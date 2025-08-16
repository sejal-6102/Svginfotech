// /components/FloatingImage.jsx

import React from 'react';
import clsx from 'clsx';

export default function FloatingImage({ imageUrl, position = 'left', opacity = 'opacity-30' }) {
  const sizeInPx = 500;
  
  // ✅ बदला हुआ हिस्सा:
  // पहले हम आधा (250px) बाहर रख रहे थे।
  // अब हम सिर्फ 100px बाहर रखेंगे।
  const offsetValue = '-150px'; 

  const positionClasses = {
    right: 'top-1/2 -translate-y-1/2',
    left: 'top-1/4 -translate-y-1/4',
  };

  const positionStyles = {
    // ✅ यहाँ नई वैल्यू का इस्तेमाल करें
    right: { right: offsetValue },
    left: { left: offsetValue },
  };

  return (
    <div
      className={clsx(
        'absolute z-0 mt-64 pointer-events-none',
        positionClasses[position]
      )}
      style={{
        width: `${sizeInPx}px`,
        height: `${sizeInPx}px`,
        ...positionStyles[position],
      }}
    >
      <img
        src={imageUrl}
        alt="Background decorative element"
        className={clsx(
          ' object-contain',
          opacity,
          'animate-rotate-slow'
        )}
      />
    </div>
  );
}