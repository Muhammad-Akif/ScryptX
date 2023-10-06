import React from "react";
import AppWhiteLogo from "../svgIcons/AppWhiteLogo";
import PlayIcon from "../svgIcons/PlayIcon";

const Footer = () => {
    return (
        <>
            <div className="mx-auto py-16 xl:px-36 lg:px-12 sm:px-6 px-4 bg-gradient-to-r from-[#4E5B79] to-[#373F51]">
                <div className="mb-32 z-30 relative flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                    <div className="flex flex-col space-y-5 justify-center md:w-1/2 text-left">
                        <button className=" py-1 rounded-full bg-opacity-10 bg-white w-32 text-sm text-white font-semibold">Contact Us</button>
                        <h1 className="text-4xl -mb-5 md:text-3xl font-semibold text-white"><strong>Let’s Talk</strong> And Work Together</h1>
                        <p className="text-base pb-2 text-gray-100 md:text-md">
                            Expanding its protective reach through a user-friendly app, ScryptX ensures the security of your data while you're on the move
                        </p>
                        <div className="space-x-4">
                            <button className=" px-8 py-3 rounded-md text-white bg-[#01B093]">Support@scryptx.com</button>
                            <button className=" px-8 py-3 rounded-md text-white bg-[#01B093]">(+62) 8899-3430</button>
                        </div>
                    </div>
                    <div className="h-[2px] w-[42%] bg-white absolute top-[90%] 2xl:right-[25%] right-[18%]" />
                    <div className="md:w-1/2  flex justify-center  items-center">
                        <div className="w-full ps-[50%]">
                            <PlayIcon className="animate-ping " />
                        </div>
                    </div>
                </div >
                <div className="border-t-[2px] border-white">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 md:gap-8 gap-4 pt-20">
                        <div className="flex flex-col flex-shrink-0 ">
                            <div>
                                <AppWhiteLogo />
                            </div>
                            <p className="text-base pb-2 text-gray-100 md:text-md pt-5">Expanding its protective reach through a user-friendly app, ScriptX ensures the security of your data while you're on the move</p>

                        </div>


                        <div className="sm:ml-0 ml-8 ps-32">
                            <h2 className="text-base font-semibold leading-4 pb-6 text-white">Quick Links</h2>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">About Us</p>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">Team</p>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">Privacy Policy</p>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">Disclamer</p>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">My Account</p>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">Press & Media</p>
                        </div>

                        <div className="ps-32">
                            <h2 className="text-base font-semibold leading-4 pb-6 text-white">Products</h2>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">Email Client</p>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">Corporate List</p>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">Reseller Portal</p>
                        </div>

                        <div className="ps-32">
                            <h2 className="text-base font-semibold leading-4 pb-6 text-white">Packages</h2>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">Free</p>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">Delux</p>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">For Businesses</p>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">Elite Package</p>
                        </div>

                        <div className="ps-32">
                            <h2 className="text-base font-semibold leading-4 pb-6 text-white">Blog</h2>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">Help & Support</p>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">Partners</p>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">Press & Media</p>
                            <p className="hover:text-gray-200 text-base leading-4 mt-6 cursor-pointer text-white">Contact Us</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="flex justify-center py-3 bg-gray-400">
                © 2023 ScryptX. All rights reserved.
            </p>
        </>
    );
};

export default Footer;
