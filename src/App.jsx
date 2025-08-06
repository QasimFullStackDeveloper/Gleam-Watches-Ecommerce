import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Home/Header';
import Footer from './Home/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
