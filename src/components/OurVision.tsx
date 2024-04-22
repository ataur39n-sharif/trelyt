import { inter } from "@/ThemeSettings";
import Image from "next/image";
import { LuChevronRight } from "react-icons/lu";
import vision from '../../public/mission.gif';

const OurVision = () => {
    return (
        <section id="vision" className={`px-[20px] md:px-[60px] lg:px-[150px] py-[30px] md:py-[60px] bg-secondary_color text-light_color ${inter.className} grid grid-cols-1 lg:grid-cols-2 gap-5`}>
            <div className="">
                <h2 className="text-[48px] md:text-[58px] lg:text-[68px] xl:text-[78px] leading-[58px] md:leading-[68px] lg:leading-[74px] xl:leading-[84px] uppercase font-[600] w-full md:w-[400px]">Our <span className="text-[48px] md:text-[68px]">++</span> <span className=" text-primary_color">Vision</span></h2>
                <p className="pr-8">
                    <span className="block pt-[20px] pb-[10px] text-[17px] md:text-[22px] leading-[27px] md:leading-[36px] font-[300]">
                        {/* To be the most trusted and respected professional services firm recognized by our clients for delivering excellence. */}
                    </span>

                    <span className="text-[17px] md:text-[22px] leading-[27px] md:leading-[36px] font-[300] ">Our vision is to create a connected world where access to technology is synonymous with empowerment. By fostering a collaborative ecosystem, we aspire to be the catalyst for positive change, driving innovation and learning. Through our diverse range of services, we envision a future where individuals and businesses can thrive, unimpeded by technological limitations. With a focus on inclusivity and social impact, we are dedicated to building a brighter, more equitable future for all.</span>

                </p>
                <div className="flex items-center pt-[40px]">
                    <button className={`bg-primary_color mr-[30px] text-secondary_color rounded-full p-[10px]`}>
                        <LuChevronRight className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] " />
                    </button>
                    <div className="w-full h-[6px] md:h-[10px] bg-dark_gray/40 "></div>
                </div>
            </div>
            <div className="order-first md:order-last vission_image_wraper flex justify-end  m-auto w-full">
                <Image className="w-full" src={vision} alt="Our Vision" width={500} height={500} />
            </div>
        </section>
    );
};

export default OurVision;