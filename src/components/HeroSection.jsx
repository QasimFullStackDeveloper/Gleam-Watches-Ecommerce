// import React, { useState, useEffect } from 'react';
import watch from '/WatchProduct/herowatch.png';

export default function HeroSection() {
    return (
        <section className="text-white relative w-full shadow-md h-auto">
                <img src={watch} alt="Watch Product" className="z-0 w-full h-auto " />
            <div className="flex flex-col items-center-safe justify-center absolute inset-0 bg-opacity-50">
                <h1 className='text-5xl'>Men's Watches</h1>
            </div>
        </section>
    );
}

// function Hero() {
//   return (
//     <div className="w-full shadow-md">
//       <img
//         src={watch}
//         alt="Men's Watches Banner"
//         className="w-full h-auto object-cover rounded-md shadow-xl"
//         // style={{ transform: `scale(${scale})` }}
//       />
//     </div>
//   );
// }

// export default Hero;