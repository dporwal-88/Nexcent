import Image from "next/image";

export default function Card({ img, title, desc }) {
  return (
    <div className="bg-white rounded-xl p-6 sm:p-8 md:p-10 text-center shadow-sm hover:shadow-md transition duration-300">
      
      {/* Icon */}
      <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
        <div className="bg-green-50 p-2 sm:p-3 rounded-xl">
          <Image
            src={img}
            alt={title}
            className="w-[40px] sm:w-[50px] md:w-[60px] h-auto"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#4D4D4D] leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 sm:mt-4 text-[13px] sm:text-[14px] md:text-[15px] text-[#717171] leading-relaxed">
        {desc}
      </p>

    </div>
  );
}