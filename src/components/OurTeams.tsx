import { inter } from '@/ThemeSettings';
import Image from 'next/image';
import { LuChevronRight } from 'react-icons/lu';

const OurTeams: React.FC = () => {
    return (
        <section className={`py-[60px] px-[20px] md:px-[60px] lg:px-[150px] bg-tertiary_color text-secondary_color ${inter.className} grid grid-cols-1 md:grid-cols-5 gap-10`}>
        
            <div className=" text-secondary_color col-span-2 ">
                <h2 className="text-[48px] md:text-[58px] lg:text-[68px] xl:text-[78px] leading-[58px] md:leading-[68px] lg:leading-[74px] xl:leading-[84px] uppercase font-[600] w-full md:w-[500px]">
                    Meet Our <span className=" text-primary_color">Team </span> <span className="text-[48px] md:text-[68px]">++</span></h2>

                    <h4 className='pt-[30px] text-[18px] md:text-[22px] font-[600] pb-[20px] text-dark_gray/75 md:text-dark_gray/95'>Our Partners</h4>
                    <div className='partners_wraper  flex items-center' >
                        <div className='partner_item cursor-pointer'>
                            <Image className='image_avatar object-cover grayscale hover:grayscale-0 duration-500 transition-all' src="/devbucket.webp" alt="Devbucket" width={160} height={100} />
                        </div>
                        <span className=' h-[30px] w-[2px] bg-dark_color/30 inline-block mx-[10px]'></span>
                        <div className='partner_item cursor-pointer'>
                            <h3 className=" text-[18px] md:text-[24px] font-[500]">Coder&apos;s Hub</h3>
                        </div>
                        
                    </div>
                
                <div className="flex items-center pt-[50px]">

                    <button className={`bg-primary_color mr-[30px] text-secondary_color rounded-full  p-[10px]`}>
                        <LuChevronRight className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] " />
                    </button>
                   
                </div>
            </div>
            <div className="team_wraper grid grid-cols-2 gap-5 md:gap-10 col-span-3">
                    <div className="team_item cursor-pointer ">
                        <div className="border-[6px] border-primary_color ">
                            <Image className='image_avatar object-cover grayscale hover:grayscale-0 duration-500 transition-all' src="/ataur.jpeg" alt="Anik Routh" width={500} height={500} />
                        </div>
                        <div className="pt-[25px] text-dark_gray">
                            <div className='flex items-center'>
                                <h3 className="text-[15px] md:text-[24px] font-[600]">Ataur Rahman</h3>
                                <span className=' h-[30px] w-[2px] bg-dark_color/30 inline-block mx-[10px]'></span>
                                <div> 
                                    <h3 className="text-[14px] md:text-[18px] font-bold">Coder&apos;s Hub</h3>
                                </div>
                            </div>
                            <div className='w-full h-[2px] bg-dark_color/40 my-[4px]'></div>
                            <p className="text-[15px] md:text-[17px]">Full-Stack Developer</p>
                        </div>
                    </div>

                    <div className="team_item cursor-pointer ">
                        <div className="border-[6px] border-primary_color ">
                            <Image className='image_avatar object-cover grayscale hover:grayscale-0 duration-500 transition-all' src="/anikrouth.jpg" alt="Anik Routh" width={500} height={500} />
                        </div>
                        <div className="pt-[25px] text-dark_gray">
                            <div className='flex items-center'>
                                    <h3 className="text-[15px] md:text-[24px] font-[600]">Anik Routh</h3>
                                    <span className=' h-[30px] w-[2px] bg-dark_color/30 inline-block mx-[10px]'></span>
                                    <div> 
                                        <Image className='image_avatar object-cover grayscale hover:grayscale-0 duration-500 transition-all' src="/devbucket.webp" alt="Devbucket" width={120} height={100} />
                                    </div>
                            </div>
                            <div className='w-full h-[2px] bg-dark_color/40 my-[4px]'></div>
                            <p className={`text-[15px] md:text-[17px]`}>Front-End Developer</p>
                        </div>
                    </div>
                    

            </div>

        </section>
    );
};

export default OurTeams;