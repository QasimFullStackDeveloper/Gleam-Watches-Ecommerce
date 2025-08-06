import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/Logo/GLEAM.png';
import user from '/Icon/user-line.svg';
import search from '/Icon/search-line.svg';
import shoppingbag from '/Icon/shopping-bag-line.svg';
export default function Header({ }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Navigation links
  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'SALE', href: '/sales' },
    { name: 'WATCHES', href: '/watches' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex flex-row items-center py-4'>
          <Link to="/" className="flex-10/12 md:flex justify-center items-center space-x-2">
            <img src={logo} alt="Gleam Watch Logo" className="h-16 w-auto" />
          </Link>
          <span className='flex items-center space-x-4'>
            <Link to=""><img src={search} alt="Search Icon" /></Link>
            <Link to=""><img src={user} alt="User Icon" /></Link>
            <Link to=""><img src={shoppingbag} alt="Shopping Bag Icon" /></Link>
          </span>
        </div>
        <div className="flex justify-center items-center py-4">
          <nav className="hidden md:flex gap-6 space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-[#922e2e] transition-colors text-[#794747]  font-semibold"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl text-[#794747]`}></i>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-[#794747] hover:text-[#922e2e] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
