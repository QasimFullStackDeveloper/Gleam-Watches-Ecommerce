import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, CardNumberElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom"; 
import Watchone from "/CheckoutPageImg/media/Watchone.webp";
import Watchtwo from "/CheckoutPageImg/media/Watchtwo.jpeg";
import CardsImage from "/CheckoutPageImg/media/Cards.png";

const stripePromise = loadStripe("pk_test_51RF95eLKfw7LssxILSN3miYlmvwQ5svDacIK93XkGfpnZGhYBwjlwPHCqXcOEEio8OK9TODiptgDFD6j63VFIcR800mSt0Bls6");

export default function Checkout() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); 

  const [cartItems, setCartItems] = useState([
    {
      name: "QUARDRO CRYSTAL WATCH IN GOLD",
      quantity: 1,
      price: 989,
      image: Watchone,
    },
    {
      name: "QUARDRO CRYSTAL WATCH IN SILVER",
      quantity: 1,
      price: 899,
      image: Watchtwo,
    },
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
    cardName: "",
    cardExpiration: "" 
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const cardElement = elements.getElement(CardElement);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        console.error(error);
        alert("Payment failed: " + error.message);
      } else {
        setSubmitted(true);
        alert("Payment processed successfully!");
        setFormData({
          email: "",
          country: "",
          firstName: "",
          lastName: "",
          address: "",
          postalCode: "",
          city: "",
          phone: "",
          cardName: "",
          cardExpiration: "", 
        });
        navigate("/order-success"); 
      }
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const isFormComplete = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  const inputClass = (field) =>
    `border p-2 rounded-md w-full ${
      errors[field] ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4 font-[lato]">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl"
      >
        <div className="space-y-6">
          <h2 className="text-lg font-semibold font-[montserrat] text-center">Express checkout</h2>
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-[#000000] hover:bg-[#D4AF37] hover:text-black text-white text-sm px-6 py-2 rounded-md h-[40px] w-[160px] cursor-pointer transition-all"
            >
              Google Pay
            </button>
          </div>
          <div className="flex items-center justify-between">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-400 text-sm">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Contact Form */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold font-[montserrat] text-black">Contact</h3>
            <input
              placeholder="Email"
              className={inputClass("email")}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            <input
              placeholder="Country/Region"
              className={inputClass("country")}
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
            />
            {errors.country && <p className="text-red-500 text-xs">{errors.country}</p>}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  placeholder="First Name"
                  className={inputClass("firstName")}
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
                {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
              </div>
              <div>
                <input
                  placeholder="Last Name"
                  className={inputClass("lastName")}
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
                {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
              </div>
            </div>
            <input
              placeholder="Address"
              className={inputClass("address")}
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
            {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
            <input
              placeholder="Apartment, Suite, etc. (Optional)"
              className="border p-2 rounded-md w-full"
            />
            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  placeholder="Postal Code"
                  className={inputClass("postalCode")}
                  value={formData.postalCode}
                  onChange={(e) =>
                    setFormData({ ...formData, postalCode: e.target.value })
                  }
                />
                {errors.postalCode && <p className="text-red-500 text-xs">{errors.postalCode}</p>}
              </div>
              <div>
                <input
                  placeholder="City"
                  className={inputClass("city")}
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
                {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
              </div>
            </div>
            <input
              placeholder="Phone"
              className={inputClass("phone")}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}

            <div className="pt-1">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-xs text-gray-600">
                  Save this information for next time
                </span>
              </label>
            </div>
          </div>

          {/* Payment Section */}
          <h3 className="text-sm font-semibold text-black">Payment</h3>
          <div className="space-y-3">
            <div className="relative">
              <CardNumberElement className="border p-2 rounded-md w-full" />
              <img
                src={CardsImage}
                alt="Payment Logos"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-12"
              />
            </div>

            <input
              placeholder="Name On Card"
              className={inputClass("cardName")}
              value={formData.cardName}
              onChange={(e) =>
                setFormData({ ...formData, cardName: e.target.value })
              }
            />
            {errors.cardName && <p className="text-red-500 text-xs">{errors.cardName}</p>}
            
            <input
              placeholder="Expiration Date (MM/YY)"
              className={inputClass("cardExpiration")}
              value={formData.cardExpiration}
              onChange={(e) =>
                setFormData({ ...formData, cardExpiration: e.target.value })
              }
            />
            {errors.cardExpiration && <p className="text-red-500 text-xs">{errors.cardExpiration}</p>}
              
             <CardCvcElement className="border p-2 rounded-md w-full" />
              {errors.cardCvc && (
                <p className="text-red-500 text-xs">{errors.cardCvc}</p>
              )}

            <div className="pt-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-xs text-gray-600">
                  Use shipping address as billing address
                </span>
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className={`text-white text-sm py-2 w-[140px] rounded-md h-[36px] mt-4 cursor-pointer transition-all ${
                isFormComplete
                  ? "bg-[#000000] hover:bg-[#D4AF37]"
                  : "bg-[#a78585]"
              }`}
            >
              Pay Now
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="border border-gray-300 p-4 rounded-md w-full bg-[#f7f7f7]">
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-400 text-sm text-center">
                Your cart is empty
              </p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 pb-3">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded"
                    />
                    <span className="absolute -top-2 -right-2 bg-[#7e4b4b] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex justify-between items-center flex-1">
                    <p className="text-sm text-gray-1500 w-3/4">{item.name}</p>
                    <p className="text-sm font-bold text-[#D4AF37]">${item.price}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="flex items-center justify-between my-3">
            <hr className="w-full border-gray-300" />
          </div>

          <div className="flex items-center gap-2 mb-4 mt-4">
            <input
              type="text"
              placeholder="Discount Code"
              className="border p-2 rounded-md flex-grow text-sm"
            />
            <button className="bg-[#000000] hover:bg-[#D4AF37] hover:text-black text-white text-xs px-3 py-1.5 rounded-md h-[36px] cursor-pointer transition-all">
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
      </form>
    </div>
  );
}
