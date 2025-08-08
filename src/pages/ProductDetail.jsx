// src/pages/ProductPage.jsx
import React, { useState, useEffect } from "react";
import Shipping from "/Cart/Shipping.png";
import Return from "/Cart/return.png";
import Warrenty from "/Cart/Warrenty.png";
import Watch from "/WatchImages/Gold.png";
import Watch2 from "/WatchImages/Black.png";
import Watch3 from "/WatchImages/Red.png";
import Watch4 from "/WatchImages/Black.png";
import Watch6 from "/WatchImages/Red.png";
import AboutSection from "../components/AboutSection";
import FeatureSection from "../components/FeatureSection";
import ReviewSection from "../components/ReviewSection";
import ContactSection from "../components/ContactSection";
import { Link } from "react-router-dom";

export default function ProductDetail() {
  const [descriptionOpen, setDescriptionOpen] = useState(true);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);
  const [returnOpen, setReturnOpen] = useState(false);
  const [rating, setRating] = useState(0); // User-selected rating (1-5)
  const productImages = [Watch, Watch2, Watch3, Watch4, Watch6];
  const [currentImage, setCurrentImage] = useState(0);

  // Submit rating automatically whenever it changes
  useEffect(() => {
    if (rating > 0) {
      submitRating(rating);
    }
  }, [rating]);

  const submitRating = (value) => {
    console.log(`User rated: ${value} star(s)`);
    // You can send this to your backend API instead of console.log
  };

  return (
    <>
      <div className="px-4 py-8 max-w-7xl mx-auto grid font-[lato] grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="bg-gray-100 p-10 rounded-md flex flex-col items-center justify-center">
          {/* Image */}
          <img
            src={productImages[currentImage]}
            alt={`Product image ${currentImage + 1}`}
            className="w-820 h-100 max-w-md object-contain mb-6"
          />

          {/* Dot Navigation */}
          <div className="flex space-x-2 mt-10">
            {productImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full ${currentImage === index ? "bg-[#000000] cursor-pointer" : "bg-gray-400 hover:bg-[#D4AF37] cursor-pointer"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className=" w-100 max-w-[750px] mt-10">
          <div className="flex justify-between ">
            <h2 className="text-xl font-[montserrat] font-semibold">CRYSTAL WATCH IN GOLD</h2>
            <p className="text-[#622525] text-xl font-bold">677$</p>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1 text-black">
            {Array(5)
              .fill()
              .map((_, idx) => (
                <span
                  key={idx}
                  className={`w-[58px] h-[58px] text-[58px] leading-[58px] flex items-center justify-center cursor-pointer ${idx < rating ? "text-yellow-400" : "text-black"
                    }`}
                  onClick={() => setRating(idx + 1)}
                >
                  &#9733;
                </span>
              ))}
          </div>

          <p className="text-lg text-[#622525] font-medium mt-10 mb-10">
            ● Limited stock available
          </p>
          <div className="space-y-6">
            <Link to="/ShoppingCart" className="flex justify-center py-3 bg-[#000000] hover:bg-[#D4AF37] text-white font-bold text-lg rounded-md shadow">
              Add to Cart
            </Link>

            {/* Benefits */}
            <div className="flex items-center justify-between text-center mt-5 text-md font-bold text-[#713939]">
              <div className="flex flex-col items-center">
                <img src={Shipping} alt="shipping icon" className="w-15" />
                <span>Free shipping</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={Return} alt="return Icon" className="w-12 mb-3" />
                <span>Free Return</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={Warrenty} alt="Warrenty icon" className="w-12 mb-3" />
                <span>2 Years Warranty</span>
              </div>
            </div>

            {/* Accordion */}
            <div className="border-t pt-4 text-lg text-gray-700">
              {/* DESCRIPTION */}
              <div>
                <button
                  onClick={() => setDescriptionOpen(!descriptionOpen)}
                  className="w-full flex justify-between items-center cursor-pointer py-2 border-b"
                >
                  <span className="font-small">DESCRIPTION</span>
                  <span className="text-4xl">
                    {descriptionOpen ? (
                      <i className="ri-arrow-up-s-line"></i>
                    ) : (
                      <i className="ri-arrow-down-s-line"></i>
                    )}
                  </span>
                </button>

                {descriptionOpen && (
                  <p className="pt-2 text-gray-600">
                    This brand-new watch shape features several vintage-inspired
                    details. The cushion-shaped case evokes classic vintage
                    men's watches. At the same time, the linen-embossed print on
                    the dial enhances its nostalgic design.
                  </p>
                )}
              </div>

              {/* DETAILS */}
              <div>
                <button
                  onClick={() => setDetailsOpen(!detailsOpen)}
                  className="w-full flex justify-between items-center cursor-pointer py-2 border-b"
                >
                  <span className="font-small">DETAILS</span>
                  <span className="text-4xl">
                    {detailsOpen ? (
                      <i className="ri-arrow-up-s-line"></i>
                    ) : (
                      <i className="ri-arrow-down-s-line"></i>
                    )}
                  </span>
                </button>
                {detailsOpen && (
                  <ul className="list-disc pl-6 pt-2 text-gray-600">
                    <li>Case Diameter: 42mm</li>
                    <li>Movement: Quartz</li>
                    <li>Strap: Stainless Steel</li>
                  </ul>
                )}
              </div>

              {/* SHIPPING INFO */}
              <div>
                <button
                  onClick={() => setShippingOpen(!shippingOpen)}
                  className="w-full flex justify-between items-center cursor-pointer py-2 border-b"
                >
                  <span className="font-small">SHIPPING INFORMATION</span>
                  <span className="text-4xl">
                    {shippingOpen ? (
                      <i className="ri-arrow-up-s-line"></i>
                    ) : (
                      <i className="ri-arrow-down-s-line"></i>
                    )}
                  </span>
                </button>

                {shippingOpen && (
                  <p className="pt-2 text-gray-600">
                    Standard delivery within 3-5 business days. Free shipping
                    for orders over $100.
                  </p>
                )}
              </div>

              {/* RETURN */}
              <div>
                <button
                  onClick={() => setReturnOpen(!returnOpen)}
                  className="w-full flex justify-between items-center cursor-pointer py-2 border-b"
                >
                  <span className="font-small">RETURN</span>
                  <span className="text-4xl">
                    {returnOpen ? (
                      <i className="ri-arrow-up-s-line"></i>
                    ) : (
                      <i className="ri-arrow-down-s-line"></i>
                    )}
                  </span>
                </button>

                {returnOpen && (
                  <p className="pt-2 text-gray-600">
                    Easy 15-day return policy. Contact support for assistance.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <AboutSection />
      {/* Feature Section */}
      <FeatureSection />
      {/* Review Section */}
      <ReviewSection />
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
