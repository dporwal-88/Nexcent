import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Clients from "@/components/Clients"
import Features from "@/components/Features"
import InfoSection from "@/components/Infosection";
import Stats from "@/components/Stats";
import InfoSection2 from "@/components/Infosection2";
import CustomerSection from "@/components/CustomerSection";
import BlogSection from "@/components/Blogsection";
import CTASection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Clients/>
      <Features/>
      <InfoSection/>
      <Stats/>
      <InfoSection2/>
      <CustomerSection/>
      <BlogSection/>
      <CTASection/>
      <Footer/>
    </div>
  );
}
