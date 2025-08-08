import Stripe from '/Home/StripeLogo.png';
import paypal from '/Home/Paypal.png';
import Visa from '/Home/VisaLogo.png';
import MasterCard from '/Home/masterCardLogo.png';
import { Link } from 'react-router-dom';

export default function Footer({ logo }) {
    return (
        <footer className="bg-[#622525B2] font-[lato] text-white pt-12 pb-6">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-start">
                    <h3 className="font-extrabold font-[montserrat] text-2xl mb-2">LEGAL</h3>
                    <ul className="space-y-2 text-md font-semibold">
                        <li><a href="">Privacy policy</a></li>
                        <li><a href="">Shipping policy</a></li>
                        <li><a href="">Terms and Condition</a></li>
                        <li><a href="">Refund policy</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-start ">
                    <h3 className="font-extrabold text-2xl font-[montserrat] mb-2">Menu</h3>
                    <ul className="space-y-1 text-md font-semibold ">
                        <li><Link to="/" className='hover:text-[#D4AF37]'>HOME</Link></li>
                        <li><Link to="/watches" className='hover:text-[#D4AF37]'>SALE</Link></li>
                        <li><Link to="/about" className='hover:text-[#D4AF37]'>ABOUT US</Link></li>
                        <li><Link to="/watches" className='hover:text-[#D4AF37]'>WATCHES</Link></li>
                        <li><Link to="/contact" className='hover:text-[#D4AF37]'>CONTACT US</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src={logo} alt="Gleam Watch Brand" className='w-full h-auto object-cover' />
                </div>
            </div>
            <div className='max-w-4xl mx-auto text-center'>
                <div className=" flex items-center justify-center space-x-4">
                    <a href=""><img src={Stripe} alt="Stripe Logo" className="md:w-24 w-20 h-auto " /></a>
                    <a href="" className=''><img src={paypal} alt="PayPal" className="w-24 h-auto rounded-xl py-3 px-2  bg-blue-900" /></a>
                    <a href=""><img src={Visa} alt="Visa" className="w-24 h-auto" /></a>
                    <a href=""><img src={MasterCard} alt="MasterCard" className="w-24 h-auto rounded-xl py-1 px-2 bg-gray-800" /></a>
                </div>
            </div>
            <div className="flex justify-end space-x-3 mx-4 text-lg">
              <a
                href="https://www.facebook.com/share/14FPASnYKkj/?mibextid=wwXIfr"
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-[#D4AF37]] transition-colors cursor-pointer">
                <i className="ri-facebook-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
                <a
                href="https://www.instagram.com/codecelix?igsh=MTVlNjdveWphbjFxYQ=="
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors cursor-pointer">
                <i className="ri-instagram-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
            <div className="text-center mt-6">
                <p className="text-sm">&copy; 2025 GLEAM WATCHES</p>
            </div>
        </footer>
    );
}
