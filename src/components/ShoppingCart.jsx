import React, { useState } from 'react';
import watch1 from '/WatchProduct/watch 1.png';
import { Link } from 'react-router-dom';
import FeatureSection from './FeatureSection';
import ContactSection from './ContactSection';

const initialCart = [
  {
    id: 1,
    name: 'Quardro Crystal Watch in Gold',
    price: 677,
    image: watch1,
    quantity: 1,
  },
];

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState(initialCart);

  const increment = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="px-6 py-10 max-w-4xl mx-auto font-[lato] text-gray-800">
        <h1 className="text-3xl font-[montserrat] font-bold mb-6">SHOPPING CART</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-100 p-4 rounded shadow-md"
              >
                <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded" />

                <div className="flex-1 ml-4">
                  <h3 className="font-bold text-sm mb-1">{item.name}</h3>

                  <div className="flex items-center space-x-2">
                    <button
                      className="px-2 py-1 bg-gray-300 rounded text-sm font-bold cursor-pointer"
                      onClick={() => decrement(item.id)}
                    >
                      -
                    </button>
                    <span className="font-semibold text-sm">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-300 rounded text-sm font-bold cursor-pointer"
                      onClick={() => increment(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <p className="text-sm font-bold text-gray-700">
                  ${item.price * item.quantity}
                </p>

                <button
                  className="text-pink-800 font-bold text-xl ml-4 cursor-pointer"
                  onClick={() => removeItem(item.id)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-8 text-right">
            <p className="text-lg mb-3 font-[montserrat] font-bold">Total: ${total}</p>
            <Link to="/checkout" className="mt-4 bg-pink-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition cursor-pointer">
              PROCEED TO CHECKOUT
            </Link>
          </div>
        )}
      </div>
      {/* Feature Section */}
      <FeatureSection />
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
