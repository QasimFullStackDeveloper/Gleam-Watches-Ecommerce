import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import logo from '/Logo/LogoImg.png';

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header logo={logo} />
      <Outlet />
      <Footer logo={logo} />
    </div>
  );
}

export default App;
