'use client'

import React, { useState } from "react";
import ArrowRight from '../svgIcons/ArrowRight'
import PrivacyBgLogo from '../svgIcons/PrivacyBgLogo'

const PrivacyTrust = () => {
    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    return (
        <div data-aos="zoom-in-up" className="w-full relative mx-auto py-24 bg-gray-50 bg-opacity-90">
            <div className="md:px-36 flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="flex space-y-5 flex-col justify-start md:w-1/2 text-left">
                    <button className=" py-1 rounded-full bg-opacity-10 text-[#016D5B] bg-[#007F7D] w-32 text-sm font-semibold">About Us</button>
                    <h1 className="text-4xl pbmd:text-3xl font-semibold ">ScryptX is privacy you can trust
                    </h1>
                    <p className="text-gray-500 mb-6 text-sm md:text-md lg:text-2xl "><strong>ScryptX</strong> offers a hassle-free experience with smooth integration, top-notch security, and cost-effective simplicity, ensuring your productivity soars effortlessly.</p>

                    <button className="px-8 rounded-md py-3 md:w-[185px] text-white  bg-gradient-to-r from-[#01B093] to-[#00A79E] ">
                        <span className="flex text-white font-semibold"> Get Started <ArrowRight width="20" className="ms-2" /></span>
                    </button>
                    <div className='flex items-center pt-3'>
                        <div className='pe-8'>
                            <h1 className="text-4xl md:text-3xl font-semibold text-[#016D5B]">1200</h1>
                            <p className="text-sm py-2 text-gray-500 md:text-md">
                                Satisfied Clients
                            </p>
                        </div>
                        <div className='h-[80%] border-l-4 border-[#016D5B]' />
                        <div className='ps-10'>
                            <h1 className="text-4xl md:text-3xl font-semibold text-[#016D5B]">120K</h1>
                            <p className="text-sm py-2 text-gray-500 md:text-md">
                                Chrome Extensions Installed
                            </p>
                        </div>
                    </div>
                </div>
                <PrivacyBgLogo className="absolute left-0 -bottom-10" />
                <div className="md:w-1/2 mt-8 md:mt-0 pt-5 flex justify-center md:justify-end">
                    <div className="lg:w-11/12 w-full ">
                        {/* <!-- Question 1 --> */}

                        <div className="p-6 bg-white scale-105 mb-6 rounded-lg ">
                            <div id="mainHeading" className="flex justify-between items-center w-full">
                                <div className=" ">
                                    <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-[#016D5B]">
                                        {" "}
                                        A straightforward solution to a complex problem
                                    </p>
                                </div>
                                <button aria-label="toggler" className="focus:outline-none " onClick={() => setOpen(!open)}>
                                    <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu" className={"mt-3 w-full"}>
                                {
                                    open ?
                                        <p className={`text-sm leading-6 text-gray-600 font-normal`}>For small and medium-sized businesses (SMEs), ScryptX is the simplest solution to one of the most pressing IT security issues of the moment: email encryption.
                                        <br />
                                        <br />
                                            Historically, encryption has been complex and expensive to implement - and therefore only accessible by large organizations. ScryptX makes security and privacy of data accessible for businesses of all sizes. Its Microsoft Outlook, Android, iOS and web browser tools use the patented privacy SaPaas developed by Scentrics to ensure that standards-based encryption can be applied to messages and attachments the moment your users are ready to click 'send'.</p>
                                        :
                                        <p className={`text-sm leading-6 text-gray-600 font-normal`}>ScryptX have combined two key components: the Scentrics security and privacy service, and a suite of tools for mobile...</p>
                                }
                            </div>
                        </div>

                        {/* <!-- Question 2 --> */}



                        <div className="p-6 bg-white scale-105 mb-6 rounded-lg">
                            <div id="mainHeading" className="flex justify-between items-center w-full">
                                <div className="">
                                    <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-[#016D5B]">
                                        {" "}
                                        A simple plug-in
                                    </p>
                                </div>
                                <button aria-label="toggler" className="focus:outline-none " onClick={() => setOpen2(!open2)}>
                                    <svg className={"transform " + (open2 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu" className={"mt-3 w-full"}>
                                {
                                    open2 ?
                                        <p className={`text-sm leading-6 text-gray-600 font-normal`}>For small and medium-sized businesses (SMEs), ScryptX is the simplest solution to one of the most pressing IT security issues of the moment: email encryption.
                                          <br />
                                        <br />
                                            Historically, encryption has been complex and expensive to implement - and therefore only accessible by large organizations. ScryptX makes security and privacy of data accessible for businesses of all sizes. Its Microsoft Outlook, Android, iOS and web browser tools use the patented privacy SaPaas developed by Scentrics to ensure that standards-based encryption can be applied to messages and attachments the moment your users are ready to click 'send'.</p>
                                        :
                                        <p className={`text-sm leading-6 text-gray-600 font-normal`}>ScryptX have combined two key components: the Scentrics security and privacy service, and a suite of tools for mobile...</p>
                                }
                            </div>
                        </div>

                        {/* <!-- Question 3 --> */}



                        <div className="p-6 bg-white scale-105 mb-6 rounded-lg">
                            <div id="mainHeading" className="flex justify-between items-center w-full">
                                <div className="">
                                    <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-[#016D5B]">
                                        {" "}
                                        Patented encryption technology
                                    </p>
                                </div>
                                <button aria-label="toggler" className="focus:outline-none " onClick={() => setOpen3(!open3)}>
                                    <svg className={"transform " + (open3 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu" className={"mt-3 w-full"}>
                                {
                                    open3 ?
                                        <p className={`text-sm leading-6 text-gray-600 font-normal`}>For small and medium-sized businesses (SMEs), ScryptX is the simplest solution to one of the most pressing IT security issues of the moment: email encryption.
                                          <br />
                                        <br />
                                            Historically, encryption has been complex and expensive to implement - and therefore only accessible by large organizations. ScryptX makes security and privacy of data accessible for businesses of all sizes. Its Microsoft Outlook, Android, iOS and web browser tools use the patented privacy SaPaas developed by Scentrics to ensure that standards-based encryption can be applied to messages and attachments the moment your users are ready to click 'send'.</p>
                                        :
                                        <p className={`text-sm leading-6 text-gray-600 font-normal`}>ScryptX have combined two key components: the Scentrics security and privacy service, and a suite of tools for mobile...</p>
                                }
                            </div>
                        </div>

                        {/* <!-- Question 4 --> */}



                        <div className="p-6 bg-white scale-105 mb-6 rounded-lg ">
                            <div id="mainHeading" className="flex justify-between items-center w-full">
                                <div className="">
                                    <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-[#016D5B]">
                                        {" "}
                                        Designed to help you succeed"
                                    </p>
                                </div>
                                <button aria-label="toggler" className="focus:outline-none " onClick={() => setOpen4(!open4)}>
                                    <svg className={"transform " + (open4 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu" className={"mt-3 w-full"}>
                                {
                                    open4 ?
                                        <p className={`text-sm leading-6 text-gray-600 font-normal`}>For small and medium-sized businesses (SMEs), ScryptX is the simplest solution to one of the most pressing IT security issues of the moment: email encryption.
                                          <br />
                                        <br />
                                            Historically, encryption has been complex and expensive to implement - and therefore only accessible by large organizations. ScryptX makes security and privacy of data accessible for businesses of all sizes. Its Microsoft Outlook, Android, iOS and web browser tools use the patented privacy SaPaas developed by Scentrics to ensure that standards-based encryption can be applied to messages and attachments the moment your users are ready to click 'send'.</p>
                                        :
                                        <p className={`text-sm leading-6 text-gray-600 font-normal`}>ScryptX have combined two key components: the Scentrics security and privacy service, and a suite of tools for mobile...</p>
                                }
                            </div>
                        </div>

                        {/* <!-- Question 5 --> */}


                        <div className="p-6 bg-white scale-105 mb-6 rounded-lg">
                            <div id="mainHeading" className="flex justify-between items-center w-full">
                                <div className="">
                                    <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-[#016D5B]">
                                        {" "}
                                        How do i know if a product is available in boutiques?
                                    </p>
                                </div>
                                <button aria-label="toggler" className="focus:outline-none " onClick={() => setOpen5(!open5)}>
                                    <svg className={"transform " + (open5 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu" className={"mt-3 w-full"}>
                                {
                                    open5 ?
                                        <p className={`text-sm leading-6 text-gray-600 font-normal`}>For small and medium-sized businesses (SMEs), ScryptX is the simplest solution to one of the most pressing IT security issues of the moment: email encryption.
                                          <br />
                                        <br />
                                            Historically, encryption has been complex and expensive to implement - and therefore only accessible by large organizations. ScryptX makes security and privacy of data accessible for businesses of all sizes. Its Microsoft Outlook, Android, iOS and web browser tools use the patented privacy SaPaas developed by Scentrics to ensure that standards-based encryption can be applied to messages and attachments the moment your users are ready to click 'send'.</p>
                                        :
                                        <p className={`text-sm leading-6 text-gray-600 font-normal`}>ScryptX have combined two key components: the Scentrics security and privacy service, and a suite of tools for mobile...</p>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default PrivacyTrust
