import Card from "./Card";
import img1 from "../assets/feature1.png";
import img2 from "../assets/feature2.png";
import img3 from "../assets/feature3.png";

export default function Features() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          <Card
            img={img3}
            title="Membership Organisations"
            desc="Our membership management software provides full automation of membership renewals and payments"
          />

          <Card
            img={img1}
            title="National Associations"
            desc="Our membership management software provides full automation of membership renewals and payments"
          />

          <Card
            img={img2}
            title="Clubs And Groups"
            desc="Our membership management software provides full automation of membership renewals and payments"
          />

        </div>

      </div>
    </section>
  );
}