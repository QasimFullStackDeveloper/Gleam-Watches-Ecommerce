import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ContactUs";
import AboutUs from './pages/aboutUs';
import Watches from './pages/Watches';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Load your Stripe public key
const stripePromise = loadStripe("pk_test_51RF95eLKfw7LssxILSN3miYlmvwQ5svDacIK93XkGfpnZGhYBwjlwPHCqXcOEEio8OK9TODiptgDFD6j63VFIcR800mSt0Bls6");


function App() {
  return (
    <Router>
      <Elements stripe={stripePromise}>
      <Routes>
        <Route path="/products" element={<Products />} />
         <Route path="/about" element={<AboutUs />}/>
         <Route path="/" element={<Watches />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      </Elements>
    </Router>
  );
}

export default App;
