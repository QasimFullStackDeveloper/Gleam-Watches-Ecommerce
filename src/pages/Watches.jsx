// src/pages/MensWatches.jsx
import React, { useState } from "react";
import WatchCard from "../components/WatchCard";
import MenWatch from "/public/WatchImages/MenWatch.png";
import filter from "/public/filter.png";
const watchesData = [
  {
    id: 1,
    title: "QUARDRD CRYSTAL WATCH IN GOLD",
    price: 677,
    discount: "30%",
    imageUrl: "/public/WatchImages/Gold.png",
  },
  {
    id: 2,
    title: "QUARDRD CRYSTAL WATCH IN BLACK",
    price: 899,
    discount: "30%",
    imageUrl: "/public/WatchImages/Black.png",
  },
  {
    id: 3,
    title: "QUARDRD CRYSTAL WATCH IN GOLD",
    price: 677,
    discount: "30%",
    imageUrl: "/public/WatchImages/Red.png",
  },
  {
    id: 1,
    title: "QUARDRD CRYSTAL WATCH IN GOLD",
    price: 677,
    discount: "30%",
    imageUrl: "/public/WatchImages/Gold.png",
  },
  {
    id: 2,
    title: "QUARDRD CRYSTAL WATCH IN BLACK",
    price: 899,
    discount: "30%",
    imageUrl: "/public/WatchImages/Black.png",
  },
  {
    id: 3,
    title: "QUARDRD CRYSTAL WATCH IN GOLD",
    price: 677,
    discount: "30%",
    imageUrl: "/public/WatchImages/Red.png",
  },
  {
    id: 1,
    title: "QUARDRD CRYSTAL WATCH IN GOLD",
    price: 677,
    discount: "30%",
    imageUrl: "/public/WatchImages/Gold.png",
  },
  {
    id: 2,
    title: "QUARDRD CRYSTAL WATCH IN BLACK",
    price: 899,
    discount: "30%",
    imageUrl: "/public/WatchImages/Black.png",
  },
  {
    id: 3,
    title: "QUARDRD CRYSTAL WATCH IN GOLD",
    price: 677,
    discount: "30%",
    imageUrl: "/public/WatchImages/Red.png",
  },
];

const Watches = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWatches = watchesData.filter((watch) =>
    watch.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Banner */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${MenWatch})` }}
      >
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-shadow-2xs">
            MEN’S WATCHES
          </h1>
        </div>
      </div>

      {/* Filter + Product Section */}
      <section className="px-16 py-6">
        <div className="flex items-center justify-between mt-20 mb-10">
          <div className="flex items-center space-x-4">
            <button>
              <img src={filter} alt="filter" className="w-6 hover:opacity-40" />
            </button>
            <span className="text-lg font-medium">FILTER</span>
          </div>
        </div>

        <button className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 cursor-pointer">
          {filteredWatches.length > 0 ? (
            filteredWatches.map((watch) => (
              <WatchCard
                key={watch.id}
                title={watch.title}
                price={watch.price}
                discount={watch.discount}
                imageUrl={watch.imageUrl}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No watches found.
            </p>
          )}
        </button>
      </section>
    </div>
  );
};

export default Watches;
