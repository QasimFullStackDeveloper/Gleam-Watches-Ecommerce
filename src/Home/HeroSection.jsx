import { Link } from 'react-router-dom';
import HeroSectionBgImg from '/Home/HeroSectionImg.png';

export default function HeroSection() {
    return (
        <section className="text-white relative w-full font-[lato] h-auto">
                <img src={HeroSectionBgImg} alt="Watch Product" className="z-0 w-full h-auto " />
            <div className="flex flex-col items-center-safe justify-center absolute inset-0 bg-opacity-50">
                <Link to="/Watches" className="mt-6 bg-[#000000] hover:bg-[#D4AF37] hover:text-black cursor-pointer md:text-base text-sm md:font-bold font-semibold border border-transparent rounded-md md:px-8 px-2 md:py-4 py-2">SHOP NOW</Link>
            </div>
        </section>
    );
}
