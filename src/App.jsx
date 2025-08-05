<<<<<<< Updated upstream
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ContactUs";
import Products from './Products';
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';

>>>>>>> Stashed changes
function App() {
  return (
    <Router>
      <Routes>
<<<<<<< Updated upstream
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
=======
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;
