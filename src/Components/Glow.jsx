// /components/Glow.jsx

import React from 'react';
import clsx from 'clsx';

export default function Glow({ position = 'right' }) {
  const sizeInPx = 600; 
  const halfSizeNegative = `-${sizeInPx / 2}px`;

  const positionClasses = {
    right: `top-60 -translate-y-1/4`,
    left: `top-1/2 -translate-y-1/2`,
  };

  const positionStyles = {
    right: { right: halfSizeNegative },
    left: { left: halfSizeNegative },
  };

  return (
    <div
      className={clsx(
        // ✅ सबसे ज़रूरी बदलाव: इसे वापस 'absolute' करें
        'absolute z-0 pointer-events-none',
        positionClasses[position]
      )}
      style={{ 
        width: `${sizeInPx}px`, 
        height: `${sizeInPx}px`, 
        ...positionStyles[position] 
      }}
    >
      <div
        className="w-full h-full rounded-full 
                   border-[60px] border-[#BFF747] 
                   opacity-40 filter blur-3xl"
      ></div>
    </div>
  );
}