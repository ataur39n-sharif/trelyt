import { forum, inter } from "@/ThemeSettings";
import { MdOutlineChevronRight } from "react-icons/md";

const HeroSection = () => {
    return (
        <section className="hero-section px-[20px] md:px-[60px] lg:px-[150px] py-[30px] md:py-[60px]">
            <h1 className={`uppercase leading-[40px] md:leading-[90px] lg:leading-[100px] xl:leading-[110px] text-[32px] md:text-[72px] lg:text-[82px] xl:text-[92px] font-[600] text-secondary_color  ${inter.className}`}>
                <span className="block  ">Seamless</span> cross-border payments made <span className="  text-primary_color">easy</span>
                 
            </h1>
            <p className=" text-secondary_color/70 text-[16px] md:text-[18px] font-normal pt-[10px] max-w-[800px]">
            We are a team of passionate developers who are dedicated to creating the best software solutions for our clients. We specialize in web development, and custom software development. Our goal is to help you achieve your business goals by providing you with the best software solutions. Contact us today to learn more about how we can help you!
                
            </p>

            <button className="mt-[30px] md:mt-[40px] hover:bg-secondary_color/95 px-[30px] md:px-[40px] py-[12px] md:py-[15px] rounded-full flex items-center bg-secondary_color text-light_gray text-[16px] font-[400]">
                <span>Open free account</span> <span><MdOutlineChevronRight className="w-5 h-5" /></span>
             </button>

        </section>
    );
};

export default HeroSection;