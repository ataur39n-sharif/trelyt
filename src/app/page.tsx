import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faq";
import HeroSection from "@/components/HeroSection";
import OurMission from "@/components/OurMission";
import OurTeams from "@/components/OurTeams";
import OurVision from "@/components/OurVision";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "TRELYT - We are a team of passionate developers",
  description: " We are a team of passionate developers who are dedicated to creating the best software solutions for our clients. We specialize in web development, and custom software development. Our goal is to help you achieve your business goals by providing you with the best software solutions. Contact us today to learn more about how we can help you!",
};


export default function Home() {

  //  0 + 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89


  return (
    <main className="">
        <HeroSection />
        <OurVision />
        <OurMission />
        <OurTeams />
        <ContactUs />
        <Faq />
    </main>
  );
}
