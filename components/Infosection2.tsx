import Image from "next/image";
import infosection from "../assets/infosection2.png"; 

export default function InfoSection2() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={infosection}
            alt="Design Illustration"
            className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-auto object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 text-center md:text-left max-w-[550px]">
          
          {/* HEADING */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#4D4D4D] leading-snug">
            How to design your site footer <br className="hidden sm:block" />
            like we did
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-4 text-[#717171] text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
            molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at
            libero ultrices mollis.
          </p>

          {/* BUTTON */}
          <button className="mt-6 md:mt-7 bg-[#4CAF4F] text-white px-6 py-3 rounded-[4px] hover:bg-green-600 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}