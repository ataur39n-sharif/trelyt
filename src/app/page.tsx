import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import OurMission from "@/components/OurMission";
import OurTeams from "@/components/OurTeams";
import OurVision from "@/components/OurVision";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "TRELYT - Empowering Dreams | Trelyt - Innovative IT Solutions & Community Learning Platform",
  description: "Discover innovative IT solutions designed to empower individuals and businesses at [Your Company Name]. Explore our range of web and software services, payment solutions, and community-driven learning platforms. Join our global community and unlock your potential today!",
};


export default function Home() {

  //  0 + 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89


  return (
    <main className="">
        <HeroSection />
        <OurMission />
        <OurVision />
        <OurTeams />
        <ContactUs />
        {/* <Faq /> */}
    </main>
  );
}
