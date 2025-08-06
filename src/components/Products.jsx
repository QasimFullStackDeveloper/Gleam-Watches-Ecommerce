import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import watchData from './WatchData';
import watch1 from '../assets/watch 1.png'; // Importing hardcoded watch image

function Products() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const gridRef = useRef(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    if (showAll) {
      gridRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAll(!showAll);
  };

  // Hardcoded add to cart
  const handleAddToCart = () => {
    alert('Added to cart');
    navigate('/cart');
  };

  const visibleWatches = showAll ? watchData : watchData.slice(0, 6);

  return (
    <>
      {/* Banner */}
      <Hero />

      <section className="bg-white text-gray-800 px-6 py-10 font-sans">
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {visibleWatches.map((item, index) => (
            <div
              key={item.id}
              className="bg-gray-100 border p-4 rounded-md shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards',
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                onClick={() => setSelectedImage(item.image)}
                className="w-full h-40 object-contain mb-3 rounded"
              />

              <div className="flex justify-between items-center mb-2">
                <div className="bg-pink-800 text-white text-xs font-bold px-4 py-1 rounded">
                  30% OFF
                </div>

                {/* Cart icon to auto navigate with hardcoded item */}
                <div
                  className="text-gray-700 hover:text-pink-800 cursor-pointer"
                  onClick={handleAddToCart}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V9a4 4 0 00-8 0v2M5 8h14l1 12H4L5 8z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-sm font-bold line-clamp-2 h-9">{item.name}</h3>
              <p className="text-xs font-semibold text-amber-500 mt-1">
                PRICE <span className="font-bold ml-1">{item.price}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Image Zoom Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Zoomed Watch"
              className="max-w-full max-h-[90vh] rounded-lg transition duration-300"
            />
          </div>
        )}

        {/* View More Button */}
        <div className="text-center mt-10">
          <button
            onClick={handleToggle}
            className="bg-pink-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition cursor-pointer"
          >
            {showAll ? 'VIEW LESS' : 'VIEW MORE'}
          </button>
        </div>
      </section>
    </>
  );
}

export default Products;
