import Image from "next/image";

import teslaLogo from "../assets/custTesla.png";
import logo1 from "../assets/custIcon1.png";
import logo2 from "../assets/custIcon2.png";
import logo3 from "../assets/custIcon3.png";
import logo4 from "../assets/custIcon4.png";
import logo5 from "../assets/custIcon5.png";
import logo6 from "../assets/custIcon6.png";

export default function CustomerSection() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section className="bg-[#F5F7FA] py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-12">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={teslaLogo}
            alt="Tesla"
            className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[326px] h-auto object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 text-center md:text-left">
          
          {/* TEXT */}
          <p className="text-[#717171] text-[14px] md:text-[16px] leading-relaxed">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui,
            vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero
            ornare, tristique quam in, gravida enim.
          </p>

          {/* NAME */}
          <h3 className="mt-4 text-[#4CAF4F] font-semibold text-[18px] md:text-[20px]">
            Tim Smith
          </h3>

          <p className="text-[#89939E] text-[14px] md:text-[16px]">
            British Dragon Boat Racing Association
          </p>

          <div className="mt-6 flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-10">

              {/* Logos */}
              {logos.map((logo, i) => (
                <Image
                  key={i}
                  src={logo}
                  alt="logo"
                  className="w-[40px] sm:w-[45px] md:w-[50px] h-auto"
                />
              ))}

              {/* Button */}
              <button className="text-[#4CAF4F] text-[16px] md:text-[18px] font-medium flex items-center gap-2">
                Meet all customers →
              </button>

            </div>

          {/* CTA */}
          

        </div>
      </div>
    </section>
  );
}