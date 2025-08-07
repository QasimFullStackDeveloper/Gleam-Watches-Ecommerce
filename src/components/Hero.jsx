import React, { useState, useEffect } from 'react';
import watch from '/WatchProdcut/herowatch.png';

function Hero() {
  const [scale, setScale] = useState(1);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const zoom = 1 + Math.min(scrollY / 1000, 0.05); // max zoom = 1.05
  //     setScale(zoom);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className="w-full pt-16 shadow-md transition duration-300 ease-in-out">
      <img
        src={watch}
        alt="Men’s Watches Banner"
        className="w-full h-auto object-cover rounded-md shadow-xl transition-transform duration-300 ease-in-out"
        style={{ transform: `scale(${scale})` }}
      />
    </div>
  );
}

export default Hero;
