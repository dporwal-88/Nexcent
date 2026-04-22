import Image from "next/image";
import infoImg from "../assets/info.png";

export default function InfoSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={infoImg}
            alt="info"
            className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[450px] h-auto object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          
          {/* Heading */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#4D4D4D] leading-snug">
            The unseen of spending three <br className="hidden sm:block" />
            years at Pixelgrade
          </h2>

          {/* Description */}
          <p className="mt-4 md:mt-5 text-[#717171] text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
            Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. 
            Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          </p>

          {/* Button */}
          <button className="mt-6 md:mt-7 bg-[#4CAF4F] text-white px-6 py-3 rounded-[4px] hover:bg-green-600 transition duration-300">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}