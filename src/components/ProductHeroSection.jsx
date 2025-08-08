import watch from '/WatchImages/MenWatch.png';

export default function ProductHeroSection() {
    return (
        <section className="text-white relative w-full shadow-md h-auto">
                <img src={watch} alt="Watch Product" className="z-0 w-full h-auto " />
            <div className="flex flex-col items-center-safe justify-center absolute inset-0 bg-opacity-50">
                <p className='text-6xl font-extrabold font-[montserrat] text-[#D4AF37]'>MEN'S WATCHES</p>
            </div>
        </section>
    );
}
