import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ContactUs";
import AboutUs from './pages/aboutUs';
import Watches from './pages/Watches';
import ProductCart from './pages/ProductCart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/" element={<ProductCart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
