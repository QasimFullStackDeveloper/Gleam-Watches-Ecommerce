import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './Home/Home.jsx';
import AboutUs from './pages/aboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Watch from './components/Products.jsx';
import WatchDetail from './pages/ProductDetail.jsx';
import Cart from './components/Cart.jsx';
import Checkout from "./pages/Checkout.jsx";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './components/NotFound.jsx';

// Load your Stripe public key
const stripePromise = loadStripe("pk_test_51RF95eLKfw7LssxILSN3miYlmvwQ5svDacIK93XkGfpnZGhYBwjlwPHCqXcOEEio8OK9TODiptgDFD6j63VFIcR800mSt0Bls6");

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '/Watches',
        element: <Watch />,
      },
      {
        path: '/WatchDetail',
        element: <WatchDetail />,
      },
      {
        path: '/sales',
        element: <Watch />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/cart',
        element: <Cart />,
      }
    ],
  },
]);

const root = createRoot(document.querySelector('#root'));
root.render(
  <Elements stripe={stripePromise}>
    <RouterProvider router={router} />
  </Elements>
);