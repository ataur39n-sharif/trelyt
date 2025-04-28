'use client';
import { inter } from "@/ThemeSettings";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Logo from "../Logo";
import OverlaySidebar from "./OverlaySidebar";

const menus = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Mission",
        link: "#mission",
    },
    {
        name: "Vision",
        link: "#vision",
    },
    {
        name: "Contact",
        link: "#contact_us",
    }
];

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <header className={`h-full px-[20px] md:px-[60px] lg:px-[150px] bg-secondary_color ${inter.className} `}>
            <div className="flex justify-between items-center  h-[85px]">

                <div className="flex items-center">
                    <Logo />
                    {/* <nav className="md:flex items-center hidden " aria-label="Main">
                        {
                            menus?.map((menu, index) => {
                                return (
                                    <Link className="cta_wraper text-[17px] font-normal transition-all duration-300   inline-block px-[10px] py-[6px] ml-[40px] " href={menu.link} key={index}>
                                        <span className="hover-underline-animation pb-[5px] hover:text-primary_color/70 text-light_color transition-all duration-300">{menu.name}</span>
                                    </Link>
                                );
                                    
                            })
                        }
   
                    </nav> */}

                </div>
                <div className={`hidden md:flex items-center ${inter.className}`}>
                    {/* <button className="cta_wraper px-[15px] py-[6px] rounded-full flex items-center text-secondary_color text-[16px] font-[400] mr-[20px]">
                        <span className="hover-underline-animation">Contact sales</span> <span><MdOutlineChevronRight className="w-5 h-5 text-secondary_color" /></span>
                    </button> */}

                    {/* <button className=" hover:bg-primary_color/95 px-[15px] py-[6px] rounded-full flex items-center bg-primary_color text-secondary_color text-[16px] font-[400]">
                        <span>Sign in</span> <span><MdOutlineChevronRight className="w-5 h-5" /></span>
                    </button> */}
                    <nav className="md:flex items-center hidden " aria-label="Main">
                        {
                            menus?.map((menu, index) => {
                                return (
                                    <Link className="cta_wraper text-[17px] font-normal transition-all duration-300   inline-block px-[10px] py-[6px] ml-[40px] " href={menu.link} key={index}>
                                        <span className="hover-underline-animation pb-[5px] hover:text-primary_color/70 text-light_color transition-all duration-300">{menu.name}</span>
                                    </Link>
                                );

                            })
                        }

                    </nav>
                </div>
                <button onClick={() => setOpen(!open)} className="md:hidden block">
                    <FaBars className="w-6 h-6 text-primary_color" />
                </button>
            </div>

            <OverlaySidebar open={open} setOpen={setOpen} />


        </header>
    );
};

export default Header;

