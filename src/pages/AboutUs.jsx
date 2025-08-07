import React from "react";
import LOGO from "/public/LOGO/GLEAM.png";
import citizen from "/public/Citizen/citizen.png";
import ContactSection from "../components/ContactSection";

export default function AboutUs() {
    return (
        <>
            <div className="bg-white font-sans py-8 text-gray-800">
                {/* Header */}
                <header className="text-center">
                    <h1 className="text-2xl text-amber-900 font-bold mt-4">About Us</h1>
                </header>

                {/* Main Content */}
                <div className="mx-auto px-4 md:px-8 py-10 font-extralight max-w-screen-xl">
                    <div className="flex flex-col md:flex-row gap-10 items-start">
                        {/* Watch Image */}
                        <div className="w-full">
                            <img
                                src={citizen}
                                alt="Citizen Watch Ad"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Right-Side Text */}
                        <div className="w-full md:w-1/2 text-2xl space-y-4">
                            <h2 className="text-red-800 font-bold text-2xl">Our Story</h2>
                            <p>
                                A chance meeting halfway around the world sparked the idea for Daniel Wellington. Our
                                founder, Filip Tysander, met a British gentleman
                            </p>
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <div className="mt-10 text-2xl space-y-4">
                        <p> whose effortless style and love for vintage watches on weathered NATO straps caught his eye. His name? Daniel Wellington.</p>
                        <p>
                            Inspired by this timeless approach, Filip set out to create his own line of watches—
                            minimalistic, refined, and versatile. These designs, featuring interchangeable watch straps,
                            quickly became iconic. Today, they remain the essence of Daniel Wellington, blending
                            Scandinavian simplicity with precision Japanese movement.
                        </p>
                        <p>
                            Whether paired with our colorful NATO straps, sleek leather straps, or crafted mesh straps,
                            Daniel Wellington watches are designed to complement any style with understated elegance.
                        </p>
                    </div>
                </div>

            </div>
            {/* Signup Section */}
            <ContactSection />
        </>
    );
}
