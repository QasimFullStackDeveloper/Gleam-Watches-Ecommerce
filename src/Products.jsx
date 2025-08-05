import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import watch1 from './assets/watch 1.png';
import watch2 from './assets/watch 2.png';
import watch3 from './assets/watch 3.png';
import watch4 from './assets/watch 1.png';
import watch5 from './assets/watch 2.png';
import watch6 from './assets/watch 3.png';
import watch7 from './assets/watch 1.png';
import watch8 from './assets/watch 2.png';
import watch9 from './assets/watch 3.png';
import watch10 from './assets/watch 1.png';
import watch11 from './assets/watch 2.png';
import watch12 from './assets/watch 3.png';

const watchData = [
  { id: 1, name: 'Quardro Crystal Watch in Gold', price: '$677', image: watch1 },
  { id: 2, name: 'Quardro Crystal Watch in Black', price: '$899', image: watch2 },
  { id: 3, name: 'Quardro Crystal Watch in Gold', price: '$677', image: watch3 },
  { id: 4, name: 'Quardro Crystal Watch in Gold', price: '$677', image: watch4 },
  { id: 5, name: 'Quardro Crystal Watch in Black', price: '$899', image: watch5 },
  { id: 6, name: 'Quardro Crystal Watch in Gold', price: '$677', image: watch6 },
  { id: 7, name: 'Quardro Crystal Watch in Gold', price: '$677', image: watch7 },
  { id: 8, name: 'Quardro Crystal Watch in Black', price: '$899', image: watch8 },
  { id: 9, name: 'Quardro Crystal Watch in Gold', price: '$677', image: watch9 },
  { id: 10, name: 'Quardro Crystal Watch in Gold', price: '$677', image: watch10 },
  { id: 11, name: 'Quardro Crystal Watch in Black', price: '$899', image: watch11 },
  { id: 12, name: 'Quardro Crystal Watch in Gold', price: '$677', image: watch12 },
];

function Products() {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    alert(`Added ${item.name} to cart`);
    navigate('/cart');
  };

  return (
    <section className="bg-white text-gray-800 px-6 py-10">
      <h1 className="text-center text-3xl font-bold mb-12">MEN’S WATCHES</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {watchData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 border p-4 rounded-md shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              onClick={() => setSelectedImage(item.image)}
              className="w-full h-40 object-contain mb-3 rounded"
            />

            {/* 30% OFF & Cart Row */}
            <div className="flex justify-between items-center mb-2">
              <div className="bg-red-800 text-white text-xs font-bold px-2 py-1 rounded">
                30% OFF
              </div>

              <div
                className="text-gray-700 hover:text-red-600"
                onClick={() => handleAddToCart(item)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 cursor-pointer"
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

            <h3 className="text-sm font-bold line-clamp-2 h-10">{item.name}</h3>
            <p className="text-xs font-semibold text-gray-500 mt-1">
              PRICE <span className="text-yellow-800 font-bold ml-1">{item.price}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged Watch"
            className="max-w-full max-h-[90vh] rounded-lg"
          />
        </div>
      )}

      <div className="text-center mt-10">
        <button className="bg-red-900 text-white px-6 py-2 rounded hover:bg-gray-900 transition cursor-pointer">
          VIEW MORE
        </button>
      </div>
    </section>
  );
}

export default Products;
