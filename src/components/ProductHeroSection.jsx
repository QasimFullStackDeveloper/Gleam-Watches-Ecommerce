import watch from '/WatchProduct/MenWatch-min.png';

export default function ProductHeroSection() {
    return (
        <section className="text-white relative w-full shadow-md h-auto">
                <img src={watch} alt="Watch Product" className="z-0 w-full h-auto " />
            <div className="flex flex-col items-center-safe justify-center absolute inset-0 bg-opacity-50">
                <p className='md:text-6xl md:font-extrabold text-xl font-semibold font-[montserrat] text-[#D4AF37]'>MEN'S WATCHES</p>
            </div>
        </section>
    );
}
