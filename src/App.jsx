import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Watch from './Products';
import ProductCart from './pages/ProductCart';
import Cart from './Cart';
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ContactUs";
import AboutUs from './pages/aboutUs';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Load your Stripe public key
const stripePromise = loadStripe("pk_test_51RF95eLKfw7LssxILSN3miYlmvwQ5svDacIK93XkGfpnZGhYBwjlwPHCqXcOEEio8OK9TODiptgDFD6j63VFIcR800mSt0Bls6");

function App() {
  return (
    <BrowserRouter> {/* <-- use BrowserRouter instead of Router */}
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path="/watches" element={<Watch />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Sales" element={<ProductCart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Elements>
    </BrowserRouter>
  );
}

export default App;
