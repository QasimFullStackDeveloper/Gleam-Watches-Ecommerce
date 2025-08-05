// src/components/WatchCard.jsx
import React from "react";
const WatchCard = ({ title, price, discount, imageUrl }) => {
    return (
        <div className="bg-gray-100 border rounded-md p-6 shadow hover:shadow-lg transition-all relative w-70">
  {/* Watch Image */}
  <div className="relative">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-46 object-contain"
    />
  </div>

  {/* Button + Discount Row */}
  <div className="mt-2 flex items-center justify-between">
    {discount && (
      <span className="bg-[#622525] text-white text-[15px] px-6 rounded">
        {discount} off
      </span>
    )}
    <button className="bg-black text-white px-3 py-1 text-[15px] rounded hover:bg-gray-800 transition duration-300 cursor-pointer">
      Cart
    </button>
  </div>

  {/* Title & Price */}
  <div className="mt-2 text-md text-gray-600 text-left">{title}</div>
  <div className="text-yellow-600 font-semibold text-md text-left">
    PRICE {price}$
  </div>
</div>

    );
};

export default WatchCard;
