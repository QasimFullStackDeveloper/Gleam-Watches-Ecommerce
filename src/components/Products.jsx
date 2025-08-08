import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import watchData from '../components/WatchData'; // Assuming you have a watchData.js file with watch details
import HeroSection from './ProductHeroSection';
import ContactSection from './ContactSection';
import AboutSection from './AboutSection';

export default function Products() {
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
    navigate('/ShoppingCart');
  };


  const [showFilters, setShowFilters] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceSort, setPriceSort] = useState(null);

  const applyFilters = () => {
    let filtered =  showAll ? watchData : watchData.slice(0, 12);

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
    <>
      {/* Banner */}
      <HeroSection />

      <section className="bg-white font-[lato] text-gray-800 px-6 py-10">
        <h1 className="text-center text-3xl font-bold font-[montserrat] mb-12">MEN'S WATCHES</h1>

        {/* Filter Button */}
        <div className="flex justify-start mb-6 max-w-6xl mx-auto relative">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-[#000000] hover:bg-[#D4AF37] text-white px-5 py-2 rounded transition"
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
                <label className="block text-sm font-[montserrat] font-medium mb-1">Category</label>
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
                <label className="block text-sm font-[montserrat] font-medium mb-1">Price</label>
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
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {applyFilters().map((item) => (
            <Link
              to="/WatchDetail"
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
                  <span className="text-xs font-bold font-[montserrat] text-red-700 bg-red-100 px-2 py-1 rounded">
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
              <p className="text-xs font-semibold font-[montserrat] text-gray-500 mt-1">
                PRICE <span className="text-[#D4AF37] text-sm font-bold ml-1">${item.price}</span>
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
          <button
            onClick={handleToggle}
            className="bg-[#000000] hover:bg-[#D4AF37] text-white px-6 py-2 rounded transition cursor-pointer"
          >
            {showAll ? 'VIEW LESS' : 'VIEW MORE'}
          </button>
        </div>
      </section>
      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
