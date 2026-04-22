import Image from "next/image";

import icon1 from "../assets/stat1.png";
import icon2 from "../assets/stat2.png";
import icon3 from "../assets/stat3.png";
import icon4 from "../assets/stat4.png";

type Stat = {
  img: any;
  value: string;
  label: string;
};

export default function Stats() {
  const stats: Stat[] = [
    { img: icon1, value: "2,245,341", label: "Members" },
    { img: icon2, value: "46,328", label: "Clubs" },
    { img: icon3, value: "828,867", label: "Event Bookings" },
    { img: icon4, value: "1,926,436", label: "Payments" },
  ];

  return (
    <section className="bg-[#F5F7FA] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        
        {/* LEFT */}
        <div className="max-w-[450px] text-center md:text-left">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#4D4D4D]">
            Helping a local
          </h2>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#4CAF4F]">
            business reinvent itself
          </h2>

          <p className="mt-3 md:mt-4 text-[#18191F] text-[14px] md:text-[16px]">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* RIGHT (STATS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
          {stats.map((item, index) => (            
            <div key={index} className="flex items-center gap-4 justify-start">
              <Image
                src={item.img}
                alt={item.label}
                className="w-[30px] sm:w-[36px] md:w-[40px] h-auto"
              />

              <div className="min-w-30">
                <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#4D4D4D]">
                  {item.value}
                </h3>
                <p className="text-[#717171] text-[13px] sm:text-[14px] md:text-[16px]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}