import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import watchData from "./WatchData";


function FeatureSection() {
    const [selectedImage, setSelectedImage] = useState(null);
    const gridRef = useRef(null);
    const navigate = useNavigate();
  
    // Hardcoded add to cart
    const handleAddToCart = () => {
      alert('Added to cart');
      navigate('/ShoppingCart');
    };
  const featuredWatches = watchData.slice(0, 6); 

  return (
    <section className="bg-white text-gray-800 font-[lato] px-6 py-10">
       <h1 className="text-center text-3xl font-bold font-[montserrat] mb-12">FEATURED PRODUCTS</h1>
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {featuredWatches.map((item, index) => (
            <Link to="/WatchDetail"
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
                <div className="bg-[#000000] hover:bg-[#D4AF37] hover:text-black text-white text-xs font-bold px-4 py-2 rounded">
                  30% OFF
                </div>

                {/* Cart icon to auto navigate with hardcoded item */}
                <div
                  className="text-gray-700 hover:text-[#D4AF37] cursor-pointer"
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
              <p className="text-xs font-[montserrat] font-semibold text-[#D4AF37] mt-1">
                PRICE <span className="font-bold ml-1">{item.price}</span>
              </p>
            </Link>
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
        <Link to="/watches" className="bg-[#000000] hover:bg-[#D4AF37] text-white px-6 py-2 rounded transition cursor-pointer">
          VIEW MORE
        </Link>
      </div>
      </section>
  );
}

export default FeatureSection;
