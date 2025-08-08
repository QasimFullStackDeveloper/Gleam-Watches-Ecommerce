import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  // Dummy values for display
  const orderNumber = "123456";
  const trackingNumber = "TRK987654321";

  return (
    <div className="bg-white text-[#444] max-w-[480px] mx-auto my-12 px-5 font-sans leading-relaxed">
      {/* Icon */}
      <div className="flex justify-center mt-[50px]">
        <img
          src="/ordersuccessfullicon.png"
          alt="Order Successful"
          className="w-[100px] h-[100px] opacity-100"
        />
      </div>

      {/* Title */}
      <h2 className="text-[#603030] font-semibold text-[1.25rem] text-center my-4">
        Order Successful
      </h2>

      {/* Order Confirmation */}
      <h3 className="text-[#603030] font-bold">Order Confirmation</h3>
      <br />
      <p>
        Thank you for your purchase! <br />
        Your order has been placed successfully. <br />
        Order Number:{" "}
        <strong className="text-[#603030]">#{orderNumber}</strong>
        <br />
        Tracking Number:{" "}
        <strong className="text-[#603030]">{trackingNumber}</strong>
      </p>

      <p className="mt-2">
        You can track your package using this number on our Tracking Page or
        your local courier's website.
      </p>

      {/* What Happens Next */}
      <p className="mt-3">What Happens Next:</p>
      <ul className="list-disc pl-7 mt-1">
        <li>We're preparing your order for shipment.</li>
        <li>
          Once shipped, you'll receive another email with updated tracking
          information.
        </li>
        <li>Estimated delivery time: 3–5 business days.</li>
      </ul>

      {/* Footer Message */}
      <p className="mt-2">
        If you have any questions, feel free to contact our support team.
        <br />
        Thank you for shopping with us!
      </p>

      {/* Button */}
    <a href="/watches">
      <button
        type="button"
        className="bg-[#7b4a4a] text-white font-bold px-6 py-3 mt-6 mx-auto block rounded shadow-md hover:bg-[#5a3535] transition-colors cursor-pointer"
      >
        CONTINUE SHOPPING
      </button>
    </a>
    </div>
   
  );
};

export default OrderConfirmation;
