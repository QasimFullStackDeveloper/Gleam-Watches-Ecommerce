import React, { useState, useEffect } from "react";
import AboutImg1 from "/Home/AboutImg1.png";
import AboutImg2 from "/Home/AboutImg2.png";
import AboutImg3 from "/Home/AboutImg3.png";

const reviews = [
  {
    id: 1,
    name: "Steven Mike",
    image: AboutImg1,
    review: "The watch is amazing and I am very happy after buying this.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jessica Lee",
    image: AboutImg2,
    review: "Great quality and stylish design. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "David Johnson",
    image: AboutImg3,
    review: "Looks elegant and feels premium. Loving it so far.",
    rating: 4,
  },
];

export default function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  
  // Card position styles
  const getPositionClass = (index) => {
    if (index === currentIndex) {
      return "scale-105 shadow-xl z-10 opacity-100";
    }
    if (index === (currentIndex - 1 + reviews.length) % reviews.length) {
      return "scale-95 opacity-50 hidden sm:block";
    }
    if (index === (currentIndex + 1) % reviews.length) {
      return "scale-95 opacity-50 hidden sm:block";
    }
    return "hidden";
  };

  return (
    <div className="max-w-6xl mx-auto font-[lato] py-10 px-4 relative">
      <div className="flex items-center justify-center gap-6">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`transition-all duration-500 transform bg-white p-6 border border-gray-300 rounded-lg hover:shadow-2xl ${getPositionClass(
              index
            )}`}
            style={{
              minWidth: index === currentIndex ? "300px" : "250px",
            }}
          >
            <div className="flex flex-col items-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-[montserrat] font-semibold">{review.name}</h3>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <i className="ri-verified-badge-fill text-blue-500"></i>{" "}
                Verified Customer
              </span>
              <div className="flex my-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <i
                    key={i}
                    className="ri-star-fill text-yellow-400 text-xl"
                  ></i>
                ))}
              </div>
              <p className="text-center text-gray-600">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
