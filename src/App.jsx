import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ContactUs";
import AboutUs from './pages/aboutUs';
import Watches from './pages/Watches';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Products />} />
         <Route path="/about" element={<AboutUs />}/>
         <Route path="/" element={<Watches />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
