'use client'

import React, { useState } from "react";

export const QuickConcerns = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    return (
        <div className="relative pt-20 text-center bg-gray-50">
            <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-10 text-gray-700 md:w-8/12 lg:leading-[80px]">Get Quick Answers to Your Concerns</h1>
            </div>
            <div className=" w-9/12 py-2 pb-32 mx-auto">
                {/* <!-- Question 1 --> */}

                <div className="w-full p-4 border rounded-lg mb-6 bg-white">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className=" ">
                            <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-[#016D5B]">
                                {" "}
                                Is ScryptX suitable for my type of business?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none " onClick={() => setOpen(!open)}>
                            <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div id="menu" className={"mt-3 text-left w-full " + (open ? "block" : "hidden")}>
                        <p className={`text-base leading-6 text-gray-600 font-normal`}>For small and medium-sized businesses (SMEs), ScryptX is the simplest solution to one of the most pressing IT security issues of the moment: email encryption.
                            <br />
                            <br />
                            Historically, encryption has been complex and expensive to implement - and therefore only accessible by large organizations. ScryptX makes security and privacy of data accessible for businesses of all sizes. Its Microsoft Outlook, Android, iOS and web browser tools use the patented privacy SaPaas developed by Scentrics to ensure that standards-based encryption can be applied to messages and attachments the moment your users are ready to click 'send'.</p>

                    </div>
                </div>

                {/* <!-- Question 2 --> */}

                <div className="p-4 border rounded-lg mb-6 bg-white ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-[#016D5B]">
                                {" "}
                                Can I get a customized solution for my business?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none " onClick={() => setOpen2(!open2)}>
                            <svg className={"transform " + (open2 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-3 text-left w-full " + (open2 ? "block" : "hidden")}>
                    <p className={`text-base leading-6 text-gray-600 font-normal`}>For small and medium-sized businesses (SMEs), ScryptX is the simplest solution to one of the most pressing IT security issues of the moment: email encryption.
                            <br />
                            <br />
                            Historically, encryption has been complex and expensive to implement - and therefore only accessible by large organizations. ScryptX makes security and privacy of data accessible for businesses of all sizes. Its Microsoft Outlook, Android, iOS and web browser tools use the patented privacy SaPaas developed by Scentrics to ensure that standards-based encryption can be applied to messages and attachments the moment your users are ready to click 'send'.</p>
</div>
                </div>

                {/* <!-- Question 3 --> */}


                <div className="p-4 border rounded-lg mb-6 bg-white ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-[#016D5B]">
                                {" "}
                                How secure is ScryptX for payment processing?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none " onClick={() => setOpen3(!open3)}>
                            <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-3 text-left w-full " + (open3 ? "block" : "hidden")}>
                    <p className={`text-base leading-6 text-gray-600 font-normal`}>For small and medium-sized businesses (SMEs), ScryptX is the simplest solution to one of the most pressing IT security issues of the moment: email encryption.
                            <br />
                            <br />
                            Historically, encryption has been complex and expensive to implement - and therefore only accessible by large organizations. ScryptX makes security and privacy of data accessible for businesses of all sizes. Its Microsoft Outlook, Android, iOS and web browser tools use the patented privacy SaPaas developed by Scentrics to ensure that standards-based encryption can be applied to messages and attachments the moment your users are ready to click 'send'.</p>
</div>
                </div>

                {/* <!-- Question 4 --> */}


                <div className="p-4 border rounded-lg mb-6 bg-white  ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-[#016D5B]">
                                {" "}
                                How do I contact Axpos for more information?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none " onClick={() => setOpen4(!open4)}>
                            <svg className={"transform " + (open4 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-3 text-left w-full " + (open4 ? "block" : "hidden")}>
                          <p className={`text-base leading-6 text-gray-600 font-normal`}>For small and medium-sized businesses (SMEs), ScryptX is the simplest solution to one of the most pressing IT security issues of the moment: email encryption.
                            <br />
                            <br />
                            Historically, encryption has been complex and expensive to implement - and therefore only accessible by large organizations. ScryptX makes security and privacy of data accessible for businesses of all sizes. Its Microsoft Outlook, Android, iOS and web browser tools use the patented privacy SaPaas developed by Scentrics to ensure that standards-based encryption can be applied to messages and attachments the moment your users are ready to click 'send'.</p>
</div>
                </div>

                {/* <!-- Question 5 --> */}

                <div className="p-4 border rounded-lg mb-6 bg-white ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-[#016D5B]">
                                {" "}
                                What is the process for getting started with ScryptX?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none " onClick={() => setOpen5(!open5)}>
                            <svg className={"transform " + (open5 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-3 text-left w-full " + (open5 ? "block" : "hidden")}>
                          <p className={`text-base leading-6 text-gray-600 font-normal`}>For small and medium-sized businesses (SMEs), ScryptX is the simplest solution to one of the most pressing IT security issues of the moment: email encryption.
                            <br />
                            <br />
                            Historically, encryption has been complex and expensive to implement - and therefore only accessible by large organizations. ScryptX makes security and privacy of data accessible for businesses of all sizes. Its Microsoft Outlook, Android, iOS and web browser tools use the patented privacy SaPaas developed by Scentrics to ensure that standards-based encryption can be applied to messages and attachments the moment your users are ready to click 'send'.</p>
</div>
                </div>

            </div>
        </div>
    )
}
