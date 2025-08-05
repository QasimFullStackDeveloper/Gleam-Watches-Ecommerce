import React, { useState } from "react";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([
    {
      name: "QUARDRO CRYSTAL WATCH IN GOLD",
      quantity: 1,
      price: 677,
      image: "/watch1.png"
    },
    {
      name: "QUARDRO CRYSTAL WATCH IN GOLD",
      quantity: 1,
      price: 899,
      image: "/watch2.png"
    }
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Left Side - Form */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-center">Express checkout</h2>

          <div className="flex justify-center">
            <button className="bg-[#7e4b4b] text-white text-sm px-6 py-2 rounded-md h-[40px] w-[160px] cursor-pointer hover:bg-[#5e2e2e] transition-all">
              Google Pay
            </button>
          </div>

          <div className="flex items-center justify-between">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-400 text-sm">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-black">Contact</h3>
            <input placeholder="Email" className="border p-2 rounded-md w-full" />
            <input placeholder="Country/Region" className="border p-2 rounded-md w-full" />

            <div className="grid grid-cols-2 gap-2">
              <input placeholder="First Name" className="border p-2 rounded-md w-full" />
              <input placeholder="Last Name" className="border p-2 rounded-md w-full" />
            </div>

            <input placeholder="Address" className="border p-2 rounded-md w-full" />
            <input
              placeholder="Apartment, Suite, etc. (Optional)"
              className="border p-2 rounded-md w-full"
            />

            <div className="grid grid-cols-2 gap-2">
              <input placeholder="Postal Code" className="border p-2 rounded-md w-full" />
              <input placeholder="City" className="border p-2 rounded-md w-full" />
            </div>

            <input placeholder="Phone" className="border p-2 rounded-md w-full" />

            <label className="text-xs text-gray-600 flex items-center space-x-2">
              <input type="checkbox" />
              <span>Save this information for next time</span>
            </label>
          </div>

          <h3 className="text-sm font-semibold text-black pt-4">Payment</h3>
          <p className="text-xs text-gray-600">All transactions are secured</p>

          <div className="space-y-3">
            <input placeholder="Card Number" className="border p-2 rounded-md w-full" />
            <div className="grid grid-cols-2 gap-2">
              <input placeholder="Expiry date (MM/YY)" className="border p-2 rounded-md w-full" />
              <input placeholder="CCV" className="border p-2 rounded-md w-full" />
            </div>
            <input placeholder="Name On Card" className="border p-2 rounded-md w-full" />

            <label className="text-xs text-gray-600 flex items-center space-x-2">
              <input type="checkbox" />
              <span>Use shipping address as billing address</span>
            </label>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#7e4b4b] text-white text-sm py-2 w-[140px] rounded-md h-[36px] mt-4 cursor-pointer hover:bg-[#5e2e2e] transition-all">
              Pay Now
            </button>
          </div>
        </div>

        {/* Right Side - Cart */}
        <div className="bg-gray-100 p-6 rounded-md w-full">
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-400 text-sm text-center">Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 relative">
                  <div className="relative w-20 h-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded"
                    />
                    <span className="absolute -top-2 -right-2 bg-[#7e4b4b] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex justify-between items-start flex-1">
                    <span className="text-[10px] uppercase font-semibold">{item.name}</span>
                    <span className="text-[13px] font-semibold">${item.price}</span>
                  </div>
                </div>
              ))
            )}
          </div>

          <hr className="my-4" />

          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Discount Code"
              className="border p-2 rounded-md flex-grow text-sm"
            />
            <button className="bg-[#7e4b4b] text-white text-xs px-3 py-1.5 rounded-md h-[36px] cursor-pointer hover:bg-[#5e2e2e] transition-all">
              Apply code
            </button>
          </div>

          {cartItems.length > 0 && (
            <div className="text-sm space-y-1 transition-all">
              <div className="flex justify-between">
                <span>SubTotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Tax</span>
                <span>$5</span>
              </div>
              <div className="flex justify-between font-bold text-[#7e4b4b]">
                <span>Total</span>
                <span>${subtotal + 5}</span>
              </div>
              <p className="text-xs text-gray-400">Including Taxes</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
