import React from 'react';
import { useNavigate } from 'react-router-dom';
import watchData from "./WatchData";


function FeatureSection() {
  const navigate = useNavigate();
  const featuredWatches = watchData.slice(0, 6); 

  return (
    <section className="bg-white py-10 px-6 text-gray-800 font-sans">
      <h2 className="text-2xl font-bold mb-6 text-center">FEATURED PRODUCTS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {featuredWatches.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 border p-4 rounded-md shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-contain mb-3 rounded"
            />
            <h3 className="text-sm font-bold line-clamp-2 h-9">{item.name}</h3>
            <p className="text-xs font-semibold text-amber-500 mt-1">
              PRICE <span className="font-bold ml-1">{item.price}</span>
            </p>
          </div>
        ))}
      </div>

      
      <div className="text-center mt-8">
        <button
          onClick={() => navigate('/products')}
          className="bg-pink-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition"
        >
          VIEW MORE PRODUCTS
        </button>
      </div>
    </section>
  );
}

export default FeatureSection;
