import Image from "next/image";

import blog1 from "../assets/blogImg3.png";
import blog2 from "../assets/blogImg1.png";
import blog3 from "../assets/blogImg2.png";

type Blog = {
  img: any;
  title: string;
};

export default function BlogSection() {
  const blogs: Blog[] = [
    {
      img: blog1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      img: blog2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      img: blog3,
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];

  return (
    <section id="blog" className="bg-white py-12">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        
        {/* HEADER */}
        <h2 className="text-[36px] font-semibold text-[#4D4D4D]">
          Caring is the new marketing
        </h2>

        <p className="mt-2 text-[#717171] max-w-[600px] mx-auto text-[16px]">
          The Nexcent blog is the best place to read about the latest membership insights,
          trends and more. See who's joining the community, read about how our community
          are increasing their membership income and lot's more.
        </p>

        {/* CARDS */}
        <div className="mt-6 grid md:grid-cols-3 gap-10">
          {blogs.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              
              {/* IMAGE */}
              <Image
                src={item.img}
                alt="blog"
                className="rounded-xl object-cover w-full h-[366px] w-[368]"
              />

              {/* OVERLAY CARD */}
              <div className="absolute bottom-[-30px] w-[317] h-[176] bg-[#F5F7FA] rounded-xl shadow-md p-5">
                
                <h3 className="text-[#717171] font-semibold text-[20px] leading-snug">
                  {item.title}
                </h3>

                <button className="mt-4 text-[#4CAF4F] font-medium flex items-center justify-center gap-2 mx-auto text-[20px]">
                  Readmore →
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}