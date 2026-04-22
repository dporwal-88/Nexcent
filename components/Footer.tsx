import Image from "next/image";

import logo from "../assets/nextIcon.png";
import insta from "../assets/insta.png";
import dribbble from "../assets/dribble.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";

export default function Footer() {
  return (
    <footer className="bg-[#263238] text-white py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-12">
        
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left">
          
          {/* LOGO */}
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Image src={logo} alt="logo" width={40} height={40} />
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Nexcent
            </p>
          </div>

          {/* TEXT */}
          <p className="mt-4 md:mt-6 text-[#F5F7FA] text-[13px] sm:text-sm leading-relaxed">
            Copyright © 2020 Nexcent ltd.
            <br />
            All rights reserved
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 md:gap-4 mt-5 md:mt-6 justify-center sm:justify-start">
            {[insta, dribbble, twitter, youtube].map((icon, i) => (
              <div
                key={i}
                className="bg-[#455A64] p-2 rounded-full hover:bg-[#4CAF4F] transition"
              >
                <Image src={icon} alt="social" className="w-[16px] md:w-[18px] h-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* COMPANY */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold mb-3 md:mb-4 text-[16px] md:text-[18px] lg:text-[20px]">
            Company
          </h3>
          <ul className="space-y-2 md:space-y-3 text-[#F5F7FA] text-sm">
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Contact us</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Testimonials</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold mb-3 md:mb-4 text-[16px] md:text-[18px] lg:text-[20px]">
            Support
          </h3>
          <ul className="space-y-2 md:space-y-3 text-[#F5F7FA] text-sm">
            <li className="hover:text-white cursor-pointer">Help center</li>
            <li className="hover:text-white cursor-pointer">Terms of service</li>
            <li className="hover:text-white cursor-pointer">Legal</li>
            <li className="hover:text-white cursor-pointer">Privacy policy</li>
            <li className="hover:text-white cursor-pointer">Status</li>
          </ul>
        </div>

        {/* EMAIL */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold mb-3 md:mb-4 text-[16px] md:text-[18px] lg:text-[20px]">
            Stay up to date
          </h3>

          <div className="flex items-center bg-[#515B60] rounded-md px-3 py-2 max-w-[300px] mx-auto sm:mx-0">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent outline-none text-sm flex-1 placeholder-[#FFFFFF]"
            />
            <span className="ml-2 text-lg">→</span>
          </div>
        </div>

      </div>
    </footer>
  );
}