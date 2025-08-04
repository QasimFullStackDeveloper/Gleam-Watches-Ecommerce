import React from 'react';

const watchData = [
  { id: 1, name: 'Watch 1', price: '$199' },
  { id: 2, name: 'Watch 2', price: '$249' },
  { id: 3, name: 'Watch 3', price: '$299' },
  { id: 4, name: 'Watch 4', price: '$349' },
  { id: 5, name: 'Watch 5', price: '$399' },
  { id: 6, name: 'Watch 6', price: '$459' },
  { id: 7, name: 'Watch 7', price: '$189' },
  { id: 8, name: 'Watch 8', price: '$219' },
  { id: 9, name: 'Watch 9', price: '$259' },
  { id: 10, name: 'Watch 10', price: '$289' },
  { id: 11, name: 'Watch 11', price: '$329' },
  { id: 12, name: 'Watch 12', price: '$399' }
];

function Products() {
  return (
    <section className="bg-white text-gray-800 px-6 py-10">
      {/* title */}
      <h1 className="text-center text-3xl font-bold mb-12">MEN’S WATCHES</h1>

      {/* grid for prods. */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {watchData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 border p-4 rounded-md shadow-md relative hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer"
          >
            {/* bag svg */}
            <div className="absolute top-2 right-2 text-gray-600 hover:text-red-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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

            {/* img placeholder */}
            <div className="bg-gray-300 w-full h-40 rounded mb-3 flex items-center justify-center text-gray-500 text-sm">
              {item.name}
            </div>

            {/* prod details */}
            <h3 className="text-sm font-bold">{item.name}</h3>
            <p className="text-xs font-semibold text-gray-500 mt-1">
              PRICE <span className="text-yellow-800 font-bold ml-1">{item.price}</span>
            </p>
          </div>
        ))}
      </div>

      {/* button - view more */}
      <div className="text-center mt-10">
        <button className="bg-red-900 text-white px-6 py-2 rounded hover:bg-gray-900 transition cursor-pointer">
          VIEW MORE
        </button>
      </div>
    </section>
  );
}

export default Products;
