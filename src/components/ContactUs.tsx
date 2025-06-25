'use client'
import Link from 'next/link';
import { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { LuChevronRight } from 'react-icons/lu';
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";



const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Handle form submission logic here
    };

    return (
        <section className='grid grid-cols-1 md:grid-cols-6 gap-0' id='contact_us'>
            <div className='text-light_color bg-secondary_color col-span-1 md:col-span-3 pl-[20px] md:pl-[60px] lg:pl-[150px] py-[80px]'>

                <h2 className="text-[48px] md:text-[58px] lg:text-[68px] xl:text-[78px] leading-[58px] md:leading-[68px] lg:leading-[74px] xl:leading-[84px] uppercase font-[600] w-full md:w-[400px]"><span className=" text-primary_color">Get in</span> touch </h2>

                <div className='py-[40px]'>
                    <div className='flex items-center  py-[10px]'>
                        <IoLocationOutline className='w-[30px] h-[30px] mr-[20px]' />
                        <p><strong>Location:</strong> 30 N GOULD ST STE N,SHERIDAN, WY 82801, United States</p>
                    </div>
                    <div className='flex items-center  py-[10px]'>
                        <MdOutlinePhone className='w-[30px] h-[30px] mr-[20px]' />
                        <p><strong>Phone:</strong> (812) 445-1050</p>
                    </div>
                    <div className='flex items-center py-[10px]'>
                        <MdOutlineMail className='w-[30px] h-[30px] mr-[20px]' />
                        <p><strong>Email:</strong> <Link href="mailto:hello@trelyt.com" className='text-primary_color'>hello@trelyt.com </Link></p>
                    </div>
                    
                    
                </div>


                <div className="flex items-center pt-[20px] md:pt-[30px]">
                    <button className={`bg-primary_color mr-[30px] text-secondary_color rounded-full  p-[10px]`}>
                        <LuChevronRight className="w-[40px] h-[40px] md:w-[80px] md:h-[80px]" />
                    </button>
                   
                </div>
            </div>
            <div className=' bg-tertiary_color   col-span-1 md:col-span-3 pr-[20px] md:pr-[60px] lg:pr-[150px]  py-[40px] md:py-[80px] pl-5 md:pl-[60px]  w-full'>
        
                <form onSubmit={handleSubmit}>
                    <div className='pb-[20px]'>
                        <label className="text-[16px] font-[500] text-dark_color/60" htmlFor="name">Name:</label>
                        <input
                            placeholder='Enter your name'
                            className='w-full h-[55px] p-[10px] bg-light_color/40 text-dark_color focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary_color focus-visible:ring-opacity-50 block mt-1 border-2 border-dark_color/20 '
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='pb-[20px]'>
                        <label className="text-[16px] font-[500] text-dark_color/60" htmlFor="email">Email:</label>
                        <input
                            placeholder='Enter your email address'
                            className='w-full h-[55px] p-[10px] bg-light_color/40 text-dark_color focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary_color focus-visible:ring-opacity-50 block mt-1 border-2 border-dark_color/20 '
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='pb-[20px]'>
                        <label className="text-[16px] font-[500] text-dark_color/60" htmlFor="message">Message:</label>
                        <textarea
                            placeholder='Enter your message here...'
                            className='w-full h-[100px] p-[10px] bg-light_color/40 text-dark_color focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary_color focus-visible:ring-opacity-50 block mt-1 border-2 border-dark_color/20 '
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button className="text-[16px] font-[600] uppercase text-center w-full py-[15px] bg-primary_color " type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
