import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import watch1 from './assets/watch 1.png';
import watch2 from './assets/watch 2.png';
import watch3 from './assets/watch 3.png';
import watch4 from './assets/watch 4.png';
import watch5 from './assets/watch 5.png';

const watchData = [
  { id: 1, name: 'Quardro Crystal Watch in Gold', price: 677, category: 'Men', image: watch1, discount: 0 },
  { id: 2, name: 'Quardro Crystal Watch in Black', price: 899, category: 'Women', image: watch2, discount: 0 },
  { id: 3, name: 'Quardro Crystal Watch in Gold', price: 677, category: 'Sale', image: watch3, discount: 30 },
  { id: 4, name: 'Quardro Crystal Watch in Gold', price: 677, category: 'Sale', image: watch4, discount: 40 },
  { id: 5, name: 'Quardro Crystal Watch in Black', price: 899, category: 'Women', image: watch5, discount: 0 },
  { id: 6, name: 'Quardro Crystal Watch in Gold', price: 677, category: 'Sale', image: watch3, discount: 30 },
  { id: 7, name: 'Quardro Crystal Watch in Gold', price: 677, category: 'Sale', image: watch2, discount: 20 },
  { id: 8, name: 'Quardro Crystal Watch in Black', price: 899, category: 'Men', image: watch5, discount: 0 },
  { id: 9, name: 'Quardro Crystal Watch in Gold', price: 677, category: 'Sale', image: watch1, discount: 10 },
  { id: 10, name: 'Quardro Crystal Watch in Gold', price: 677, category: 'Sale', image: watch5, discount: 50 },
  { id: 11, name: 'Quardro Crystal Watch in Black', price: 899, category: 'Men', image: watch1, discount: 0 },
  { id: 12, name: 'Quardro Crystal Watch in Gold', price: 677, category: 'Women', image: watch2, discount: 0 },
  { id: 13, name: 'Quardro Crystal Watch in Gold', price: 677, category: 'Sale', image: watch3, discount: 30 },
  { id: 14, name: 'Quardro Crystal Watch in Gold', price: 677, category: 'Sale', image: watch2, discount: 20 },
  { id: 15, name: 'Quardro Crystal Watch in Black', price: 899, category: 'Men', image: watch5, discount: 0 },
  { id: 16, name: 'Quardro Crystal Watch in Gold', price: 677, category: 'Sale', image: watch1, discount: 10 },
  { id: 17, name: 'Quardro Crystal Watch in Gold', price: 677, category: 'Sale', image: watch5, discount: 50 },
  { id: 18, name: 'Quardro Crystal Watch in Black', price: 899, category: 'Men', image: watch1, discount: 0 },
  { id: 19, name: 'Quardro Crystal Watch in Gold', price: 677, category: 'Women', image: watch2, discount: 0 },
];

function Products() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceSort, setPriceSort] = useState(null);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    alert(`Added ${item.name} to cart`);
    navigate('/cart');
  };

  const applyFilters = () => {
    let filtered = [...watchData];

    if (categoryFilter === 'Sale') {
      filtered = filtered.filter((item) => item.discount > 0);
    } else if (categoryFilter !== 'All') {
      filtered = filtered.filter((item) => item.category === categoryFilter);
    }

    if (priceSort === 'low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'high') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

  return (
    <section className="bg-white text-gray-800 px-6 py-10">
      <h1 className="text-center text-3xl font-bold mb-6">MEN’S WATCHES</h1>

      {/* Filter Button */}
      <div className="flex justify-start mb-6 max-w-6xl mx-auto relative">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-pink-800 text-white px-5 py-2 rounded hover:bg-gray-900 transition"
        >
          <img
            src="/Filter.png"
            alt="Filter Icon"
            className="inline w-5 h-5 mr-2"
          />
          Filters
        </button>

        {showFilters && (
          <div className="absolute left-0 top-14 w-64 bg-white shadow-lg border rounded-md p-4 z-50">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                onChange={(e) => setCategoryFilter(e.target.value)}
                value={categoryFilter}
                className="w-full border rounded px-3 py-2"
              >
                <option value="All">All</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Sale">Sale</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <select
                onChange={(e) => setPriceSort(e.target.value)}
                value={priceSort || ''}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">None</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {applyFilters().map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 border p-4 rounded-md shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer relative"
          >
            <img
              src={item.image}
              alt={item.name}
              onClick={() => setSelectedImage(item.image)}
              className="w-full h-40 object-contain mb-3 rounded"
            />

            <div className="flex justify-between items-center mb-1">
              {/* Discount badge */}
              {item.discount > 0 ? (
                <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-1 rounded">
                  {item.discount}% OFF
                </span>
              ) : (
                <span></span>
              )}

              {/* Cart icon */}
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

            {/* Product Name & Price */}
            <h3 className="text-sm font-bold line-clamp-2 h-10">{item.name}</h3>
            <p className="text-xs font-semibold text-gray-500 mt-1">
              PRICE <span className="text-yellow-800 font-bold ml-1">${item.price}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Modal Image Viewer */}
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

      {/* View More Button */}
      <div className="text-center mt-10">
        <button className="bg-red-900 text-white px-6 py-2 rounded hover:bg-gray-900 transition cursor-pointer">
          VIEW MORE
        </button>
      </div>
    </section>
  );
}

export default Products;
