'use client';
import { useState, FC } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqData = [
    {
        question: 'What is the Faq ?',
        answer: 'FAQ stands for Frequently Asked Questions. It is a list of questions and answers that are commonly asked by customers or clients. FAQs are typically used on websites to provide information to visitors about a product or service. They are a useful tool for businesses to answer common questions and provide information to customers.'
    },
    {
        question: 'What is the Faq ?',
        answer: 'FAQ stands for Frequently Asked Questions. It is a list of questions and answers that are commonly asked by customers or clients. FAQs are typically used on websites to provide information to visitors about a product or service. They are a useful tool for businesses to answer common questions and provide information to customers.'
    },
    {
        question: 'What is the Faq ?',
        answer: 'FAQ stands for Frequently Asked Questions. It is a list of questions and answers that are commonly asked by customers or clients. FAQs are typically used on websites to provide information to visitors about a product or service. They are a useful tool for businesses to answer common questions and provide information to customers.'
    },
    {
        question: 'What is the Faq ?',
        answer: 'FAQ stands for Frequently Asked Questions. It is a list of questions and answers that are commonly asked by customers or clients. FAQs are typically used on websites to provide information to visitors about a product or service. They are a useful tool for businesses to answer common questions and provide information to customers.'
    },
    {
        question: 'What is the Faq ?',
        answer: 'FAQ stands for Frequently Asked Questions. It is a list of questions and answers that are commonly asked by customers or clients. FAQs are typically used on websites to provide information to visitors about a product or service. They are a useful tool for businesses to answer common questions and provide information to customers.'
    },
    {
        question: 'What is the Faq ?',
        answer: 'FAQ stands for Frequently Asked Questions. It is a list of questions and answers that are commonly asked by customers or clients. FAQs are typically used on websites to provide information to visitors about a product or service. They are a useful tool for businesses to answer common questions and provide information to customers.'
    },
    {
        question: 'What is the Faq ?',
        answer: 'FAQ stands for Frequently Asked Questions. It is a list of questions and answers that are commonly asked by customers or clients. FAQs are typically used on websites to provide information to visitors about a product or service. They are a useful tool for businesses to answer common questions and provide information to customers.'
    }
]



const Faq: FC = () => {

    const [active, setActive] = useState<number | null>(null);


    const handleFaq = (index: number) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    
    }

    return (
        <section className='grid grid-cols-1 md:grid-cols-7 gap-10 bg-tertiary_color'>

            <div className='col-span-1 md:col-span-4 pr-5 md:pr-0 py-0 md:py-[60px] pl-[20px] md:pl-[60px] lg:pl-[150px '>
                {
                    faqData?.map((faq, index) => (
                        <div key={index} className="faq_item border-t-[3px] border-dark_color/10 py-[15px]">
                            <button onClick={() => handleFaq(index)} className='pb-[15px] border-b-[3px] border-dark_color/10 flex justify-between items-center w-full text-dark_color/70 ' type='button'>
                                <p className="text-[18px] md:text-[24px] font-[600] ">
                                    {faq.question}
                                </p>
                                <span>
                                    {
                                        index === active ? <FaMinus className="transition-all duration-500 w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-primary_color" /> : <FaPlus className="transition-all duration-500 w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-primary_color" />
                                    }
                                    
                                </span>
                            </button>
                            {
                            
                                    <div className={`${index === active ? 'block' : 'hidden'} faq_content pt-[20px] pb-[10px] text-[16px] md:text-[18px] leading-[32px] font-[300] transition-all duration-500`}>
                                        {faq.answer}
                                    </div>
                            
                            }

                        </div>
                    ))
                }

            </div>
            <div className=' relative col-span-1 md:col-span-3 order-first md:order-last'>
                <div className='sticky top-0 h-full py-[30px] md:py-[60px] pl-5 md:pl-[60px] pr-[20px] md:pr-[60px] lg:pr-[150px]  bg-secondary_color text-light_color'>
               
                    <h2 className="text-[48px] md:text-[58px] lg:text-[68px] xl:text-[78px] leading-[58px] md:leading-[68px] lg:leading-[74px] xl:leading-[84px] uppercase font-[600] w-full md:w-[400px]">
                    Frequently Asked<span className="block text-primary_color">Question</span>  </h2>

                    <div className="flex items-center pt-[60px]">
                        <button className={`bg-primary_color mr-[30px] text-secondary_color rounded-full  p-[10px]`}>
                            <FaPlus className="w-[40px] h-[40px] md:w-[80px] md:h-[80px]" />
                        </button>

                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Faq;