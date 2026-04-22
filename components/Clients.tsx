import Image from "next/image";
import logo1 from "../assets/Logo1.png";
import logo2 from "../assets/Logo2.png";
import logo3 from "../assets/Logo3.png";
import logo4 from "../assets/Logo4.png";
import logo5 from "../assets/Logo5.png";
import logo6 from "../assets/Logo6.png";
import logo7 from "../assets/Logo7.png";

export default function Clients() {
  const logos = [logo7, logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section id="client" className="bg-white py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold text-gray-700">
          Our Clients
        </h2>

        <p className="mt-3 text-[#717171] text-[14px] md:text-[16px]">
          We have been working with some Fortune 500+ clients
        </p>

        {/* Logos */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 place-items-center">
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt="client logo"
              className="w-[40px] sm:w-[50px] md:w-[60px] h-auto object-contain"
            />
          ))}
        </div>

        {/* Bottom Heading */}
        <div className="mt-12 md:mt-16 max-w-[700px] mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-[36px] font-semibold text-[#4D4D4D] leading-snug">
            Manage your entire community <br className="hidden sm:block" />
            in a single system
          </h3>

          <p className="mt-3 md:mt-4 text-[#717171] text-sm md:text-base">
            Who is Nexcent suitable for?
          </p>
        </div>

      </div>
    </section>
  );
}