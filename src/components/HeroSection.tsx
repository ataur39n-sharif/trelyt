import { inter } from "@/ThemeSettings";

const HeroSection = () => {
    return (
        <section className="hero-section px-[20px] md:px-[60px] lg:px-[150px] py-[30px] md:py-[60px] h-[100dvh] text-center flex flex-col items-center justify-center gap-8">
            
                <h1 className={`uppercase leading-[40px] md:leading-[90px] lg:leading-[100px] xl:leading-[110px] text-[32px] md:text-[72px] lg:text-[82px] xl:text-[92px] font-[600] text-secondary_color  ${inter.className}`}>
                    <span className="block  ">Empowering <span className=" text-primary_color">Dreams</span>,</span>
                    Empowering <span className="  text-primary_color">You</span>

                </h1>
                {/* <div className=" flex justify-center"> */}
                    <p className=" text-secondary_color/70 text-[16px] md:text-[18px] font-normal pt-[10px] max-w-[800px]">
                        Unlock your potential with our cutting-edge IT solutions, designed to remove barriers and ignite growth. Whether you&apos;re a freelancer, shopkeeper, content creator, or eager learner, we have the tools and support you need to succeed. Join our community and discover a world where technology works for you, enabling your dreams and driving your success.
                    </p>
                {/* </div> */}

                {/* <button className="mt-[30px] md:mt-[40px] hover:bg-secondary_color/95 px-[30px] md:px-[40px] py-[12px] md:py-[15px] rounded-full flex items-center bg-secondary_color text-light_gray text-[16px] font-[400]">
                    <span>Open free account</span> <span><MdOutlineChevronRight className="w-5 h-5" /></span>
                </button> */}
        </section>
    );
};

export default HeroSection;