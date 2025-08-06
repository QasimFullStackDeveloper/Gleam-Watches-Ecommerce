import HeroSectionBgImg from '/Home/HeroSectionImg.png';

export default function HeroSection() {
    return (
        <section className="text-white relative w-full h-auto">
                <img src={HeroSectionBgImg} alt="Watch Product" className="z-0 w-full h-auto " />
            <div className="flex flex-col items-center-safe justify-center absolute inset-0 bg-opacity-50">
                <a href="#" className="mt-6 bg-[#774141] cursor-pointer md:text-base text-sm md:font-bold font-semibold border border-transparent rounded-md md:px-8 px-2 md:py-4 py-2">SHOP NOW</a>
            </div>
        </section>
    );
}
