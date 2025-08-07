import React, { useState } from 'react';
import AboutImg1 from '/Home/AboutImg1.png';
import AboutImg2 from '/Home/AboutImg2.png';
import AboutImg3 from '/Home/AboutImg3.png';

const reviews = [
  {
    id: 1,
    name: 'Steven Mike',
    image: AboutImg1,
    review: 'The watch is amazing and I am very happy after buying this.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jessica Lee',
    image: AboutImg2,
    review: 'Great quality and stylish design. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'David Johnson',
    image: AboutImg3,
    review: 'Looks elegant and feels premium. Loving it so far.',
    rating: 4,
  },
];

export default function ReviewSection() {
   const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const getPositionClass = (index) => {
    if (index === currentIndex) return 'scale-105 shadow-xl z-10';
    if (index === (currentIndex - 1 + reviews.length) % reviews.length) return 'scale-95 opacity-50';
    if (index === (currentIndex + 1) % reviews.length) return 'scale-95 opacity-50';
    return 'hidden';
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 relative">
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          className="text-3xl cursor-pointer hover:text-[#922E2E] transition"
        >
          <i className="ri-arrow-left-s-line"></i>
        </button>

        <div className="flex items-center justify-center gap-6 overflow-hidden">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`transition-all duration-500 transform ${getPositionClass(index)} bg-white p-6 border border-black rounded-lg hover:scale-110 hover:shadow-2xl`}
              style={{ minWidth: index === currentIndex ? '300px' : '250px' }}
            >
              <div className="flex flex-col items-center">
                <img src={review.image} alt={review.name} className="w-20 h-20 rounded-full object-cover mb-4" />
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <i className="ri-verified-badge-fill text-blue-500"></i> Verified Customer
                </span>
                <div className="flex my-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
                  ))}
                </div>
                <p className="text-center text-gray-600">{review.review}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="text-3xl cursor-pointer hover:text-[#922E2E] transition"
        >
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>
  );
}
