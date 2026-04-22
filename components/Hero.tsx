import Image from "next/image";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="bg-[#F5F7FA] relative">
      
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-10 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* LEFT */}
        <div className="max-w-[650px] text-center md:text-left">
          
          <h1 className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[62px] font-semibold leading-tight text-gray-700">
            Lessons and insights
            <br />
            <span className="text-green-500">from 8 years</span>
          </h1>

          <p className="mt-4 md:mt-5 text-gray-500 text-[14px] md:text-[16px]">
            Where to grow your business as a photographer: site or social media?
          </p>

          <button className="mt-6 md:mt-8 bg-[#4CAF4F] text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
            Register
          </button>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-[420px] flex justify-center md:justify-end">
          <Image
            src={heroImg}
            alt="hero"
            className="w-[240px] sm:w-[320px] md:w-full h-auto"
            priority
          />
        </div>

      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 pb-6">
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-300 rounded-full"></span>
        <span className="w-3 h-3 bg-green-300 rounded-full"></span>
      </div>

    </section>
  );
}