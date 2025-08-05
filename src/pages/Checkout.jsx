import React, { useState } from "react";
import Watchone from "/src/media/Watchone.webp";
import Watchtwo from "/src/media/Watchtwo.jpeg";
import CardsImage from "/src/media/Cards.png";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([
    {
      name: "QUARDRO CRYSTAL WATCH IN GOLD",
      quantity: 1,
      price: 677,
      image: Watchone,
    },
    {
      name: "QUARDRO CRYSTAL WATCH IN SILVER",
      quantity: 1,
      price: 899,
      image: Watchtwo,
    }
  ]);

  const [formData, setFormData] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    ccv: "",
    cardName: ""
  });

  const isFormComplete = Object.values(formData).every((value) => value.trim() !== "");
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4 font-sans">
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

          {/* Form Fields */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-black">Contact</h3>
            <input placeholder="Email" className="border p-2 rounded-md w-full" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input placeholder="Country/Region" className="border p-2 rounded-md w-full" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
            <div className="grid grid-cols-2 gap-2">
              <input placeholder="First Name" className="border p-2 rounded-md w-full" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
              <input placeholder="Last Name" className="border p-2 rounded-md w-full" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
            </div>
            <input placeholder="Address" className="border p-2 rounded-md w-full" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
            <input placeholder="Apartment, Suite, etc. (Optional)" className="border p-2 rounded-md w-full" />
            <div className="grid grid-cols-2 gap-2">
              <input placeholder="Postal Code" className="border p-2 rounded-md w-full" value={formData.postalCode} onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })} />
              <input placeholder="City" className="border p-2 rounded-md w-full" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
            </div>
            <input placeholder="Phone" className="border p-2 rounded-md w-full" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />

            <div className="pt-1">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 appearance-none border border-gray-300 rounded relative checked:bg-[#7e4b4b] checked:border-transparent"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "14px"
                  }}
                />
                <span className="text-xs text-gray-600">Save this information for next time</span>
              </label>
            </div>
          </div>

          {/* Payment */}
          <h3 className="text-sm font-semibold text-black">Payment</h3>
          <p className="text-xs text-gray-600 -mt-2">All transactions are secured</p>

          <div className="space-y-3">
            <div className="relative">
              <input
                placeholder="Card Number"
                className="border p-2 pr-28 rounded-md w-full"
                value={formData.cardNumber}
                onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
              />
              <img
                src={CardsImage}
                alt="Payment Logos"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-12"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <input placeholder="Expiry date (MM/YY)" className="border p-2 rounded-md w-full" value={formData.expiry} onChange={(e) => setFormData({ ...formData, expiry: e.target.value })} />
              <input placeholder="CCV" className="border p-2 rounded-md w-full" value={formData.ccv} onChange={(e) => setFormData({ ...formData, ccv: e.target.value })} />
            </div>
            <input placeholder="Name On Card" className="border p-2 rounded-md w-full" value={formData.cardName} onChange={(e) => setFormData({ ...formData, cardName: e.target.value })} />
          

          {/* Checkbox here */}
          <div className="pt-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 appearance-none border border-gray-300 rounded relative checked:bg-[#7e4b4b] checked:border-transparent"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "14px"
                }}
              />
              <span className="text-xs text-gray-600">Use shipping address as billing address</span>
            </label>
          </div>
        </div>

          <div className="flex justify-center">
            <button className={`text-white text-sm py-2 w-[140px] rounded-md h-[36px] mt-4 cursor-pointer transition-all ${isFormComplete ? "bg-[#7e4b4b] hover:bg-[#5e2e2e]" : "bg-[#a78585]"}`}>
              Pay Now
            </button>
          </div>
        </div>

        {/* Right Side - Cart */}
        <div className="border border-gray-300 p-4 rounded-md w-full bg-[#f7f7f7]">
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-400 text-sm text-center">Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 pb-3">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
                    <span className="absolute -top-2 -right-2 bg-[#7e4b4b] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex justify-between items-center flex-1">
                    <p className="text-sm text-gray-1500 w-3/4">{item.name}</p>
                    <p className="text-sm font-bold text-[#7e4b4b]">${item.price}</p>
                  </div>
                </div>
                
              ))
            )}
          </div>

          <div className="flex items-center justify-between my-3">
            <hr className="w-full border-gray-300" />
          </div>


          <div className="flex items-center gap-2 mb-4 mt-4">
            <input type="text" placeholder="Discount Code" className="border p-2 rounded-md flex-grow text-sm" />
            <button className="bg-[#7e4b4b] text-white text-xs px-3 py-1.5 rounded-md h-[36px] cursor-pointer hover:bg-[#5e2e2e] transition-all">
              Apply code
            </button>
          </div>

          {cartItems.length > 0 && (
            <div className="text-sm space-y-1 transition-all">
              <div className="flex justify-between">
                <span className="font-semibold">SubTotal</span>
                <span className="text-[#7e4b4b] text-[16px] font-semibold">${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Shipping Tax</span>
                <span className="text-[#7e4b4b] text-[16px] font-semibold">$5</span>
              </div>
              <div className="flex justify-between font-bold text-[#7e4b4b]">
                <span className="font-bold">Total</span>
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
