import { inter } from "@/ThemeSettings";
import Image from "next/image";
import { LuChevronRight } from "react-icons/lu";
import mission from '../../public/mission_-bl.png';

const OurMission = () => {
    return (
        <section id="mission" className={` bg-primary_color text-secondary_color ${inter.className} grid grid-cols-1 lg:grid-cols-2 gap-0`}>
            <div className=" vission_image_wraper flex justify-start pl-[20px] md:pl-[60px] lg:pl-[150px] py-[20px] md:py-[30px] xl:py-[60px]">
                <Image className="w-[500px] h-[500px] m-auto" src={mission} alt="Our Vision" width={500} height={500} />
            </div>
            <div className="bg-secondary_color text-light_color pr-[20px] md:pr-[60px] lg:pr-[150px] pl-[20px] md:pl-[30px] xl:pl-[60px] py-[20px] md:py-[30px] xl:py-[60px]">
                <h2 className="text-[48px] md:text-[58px] lg:text-[68px] xl:text-[78px] leading-[58px] md:leading-[68px] lg:leading-[74px] xl:leading-[84px] uppercase font-[600] w-full md:w-[400px]">Our  <span className="text-[48px] md:text-[68px]">++</span> <span className=" text-primary_color">Mission</span></h2>
                <p>
                    <span className="block pt-[20px] pb-[10px] text-[17px] md:text-[22px] leading-[27px] md:leading-[36px] font-[300]">
                        {/* To be the most trusted and respected professional services firm recognized by our clients for delivering excellence. */}
                    </span>

                    <span className="text-[17px] md:text-[22px] leading-[27px] md:leading-[36px] font-[300]">Our mission is to empower individuals and businesses by providing innovative IT solutions that prioritize web and software services, removing barriers to productivity and growth. Through our SaaS applications and community-driven learning platforms, we aim to facilitate seamless and secure transactions for freelancers, shopkeepers, content creators, and learners worldwide. Committed to social responsibility, we actively engage in community development and support initiatives, ensuring that technology benefits everyone.</span>

                </p>
                <div className="flex items-center pt-[40px]">
                    <button className={`bg-primary_color mr-[30px] text-secondary_color rounded-full  p-[10px]`}>
                        <LuChevronRight className="w-[40px] h-[40px] md:w-[80px] md:h-[80px]" />
                    </button>
                    <div className="w-full h-[6px] md:h-[10px] bg-dark_gray/40"></div>
                </div>
            </div>

        </section>
    );
};

export default OurMission;