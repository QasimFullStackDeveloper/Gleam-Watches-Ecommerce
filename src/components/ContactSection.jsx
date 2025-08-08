export default function ContactSection() {
  return (
    <section className="py-12 text-center font-[lato] bg-[#6225251A] ">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="xl:text-5xl lg:text-4xl font-[montserrat] font-medium mb-2">JOIN NOW AND GET 10% OFF</h2>
        <p className="xl:text-4xl lg:text-3xl text-[#774141]  mb-3">
          You also be the first to know about our exclusive offers special edition and latest news.
        </p>
        <p className="text-2xl mb-6">Don't miss out signup-now!</p>
        <div className="flex justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-400 bg-white px-4 py-2 w-64 rounded"
          />
          <button className="bg-[#000000] hover:bg-[#D4AF37] cursor-pointer text-white md:px-6 px-2 md:py-2 py-1 text-sm md:text-base lg:text-lg rounded">SIGN UP</button>
        </div>
        <p className="text-xs text-[#622525] mt-4 max-w-lg mx-auto">
          By signing up, I confirm that I'm 16 years or older, that I want to receive personalized marketing
          by email and that I have read and understood Gleam watches policy.
        </p>
      </div>
    </section>
  );
}
