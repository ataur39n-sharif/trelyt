'use client';
import { Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { RxCross2 } from "react-icons/rx";
import Logo from '../Logo';
import Link from 'next/link';


const menus = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "How it works",
        link: "/how-it-works",
    },
    {
        name: "Contact",
        link: "/contact",
    },
    {
        name: "Pricing",
        link: "/pricing",
    },
];

export default function OverlaySidebar(props: any) {

    const {open, setOpen} = props;


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-light_gray bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden bg-secondary_color text-light_color">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <RxCross2 className="h-6 w-6" aria-hidden="true" />
                      </button> 
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white pb-6 pt-4 shadow-xl">
                    <div className="px-4 sm:px-6">
                        <Logo />
                
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <nav className="pl-[10px]" aria-label="Main">
                        {
                            menus?.map((menu, index) => {
                                return (
                                    <Link className=" cta_wraper w-full text-[20px] font-normal transition-all duration-300  inline-block  py-[15px] border-b border-dashed  " href={menu.link} key={index}>
                                        <span className="hover-underline-animation pb-[5px] hover:text-primary_color/70 text-light_color transition-all duration-300">{menu.name}</span>
                                    </Link>
                                );
                                    
                            })
                        }
   
                    </nav>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
