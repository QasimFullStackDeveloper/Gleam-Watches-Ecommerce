import React, { useState } from 'react';
import AboutImg1 from '/Home/AboutImg1.png';
import AboutImg2 from '/Home/AboutImg2.png';
import AboutImg3 from '/Home/AboutImg3.png';
import AboutImg4 from '/Home/AboutImg4.png';
import AboutImg5 from '/Home/AboutImg5.png';

const images = [
  AboutImg1,
  AboutImg3,
  AboutImg2,
  AboutImg4,
  AboutImg5,
];

export default function AboutSection() {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 font-[lato] md:grid-cols-2 gap-10">
      <div className="flex justify-center items-center">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full h-auto max-w-md rounded shadow-lg object-cover"
        />
      </div>

      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-3xl text-[#922E2E] font-[montserrat] mb-4">DETAILS EASY TO LOVE</h2>
        <p className="text-[#6e4e4e] text-lg leading-relaxed">
          Gleam watches is one of the most prestigious and iconic luxury watch brands in the world, known for its precision, craftsmanship, and timeless design. Founded in 1905 in London and later moved to Switzerland, Rolex has built a reputation for creating high-quality timepieces that combine elegance with durability.
        </p>

        <div className="flex gap-4 mt-6 overflow-x-auto pb-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              className={`w-24 h-24 rounded object-cover cursor-pointer border-2 ${selectedImage === img ? 'border-[#922E2E]' : 'border-transparent'}`}
              onClick={() => handleImageClick(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
