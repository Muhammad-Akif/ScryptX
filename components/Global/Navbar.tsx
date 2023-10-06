'use client'

import React, { useState } from "react";
import AppLogo from "../svgIcons/AppLogo";
import { NavItems } from "../Utils";
import Link from "next/link";

export default function Navbar() {
    const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="dark:bg-gray-900 sticky top-0 z-50">
            <div className="relative">
                {/* For md screen size */}
                <div id="md-searchbar" className={`${mdOptionsToggle ? "hidden" : "flex"} bg-white dark:bg-gray-900 lg:hidden py-5 px-6 items-center justify-between`}>
                    <div className="flex items-center space-x-3 text-gray-800 dark:text-white">
                        <div>
                            <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <input type="text" placeholder="Search for products" className="text-sm leading-none dark:text-gray-300 dark:bg-gray-900 text-gray-600 focus:outline-none" />
                    </div>
                    <div className="space-x-6">
                        <button aria-label="view favourites" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                            <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.8921 3.07357C13.5516 2.73291 13.1473 2.46267 12.7023 2.2783C12.2574 2.09392 11.7804 1.99902 11.2988 1.99902C10.8171 1.99902 10.3402 2.09392 9.89521 2.2783C9.45023 2.46267 9.04595 2.73291 8.70544 3.07357L7.99878 3.78024L7.29211 3.07357C6.60432 2.38578 5.67147 1.99938 4.69878 1.99938C3.72609 1.99938 2.79324 2.38578 2.10544 3.07357C1.41765 3.76137 1.03125 4.69422 1.03125 5.66691C1.03125 6.6396 1.41765 7.57245 2.10544 8.26024L2.81211 8.96691L7.99878 14.1536L13.1854 8.96691L13.8921 8.26024C14.2328 7.91974 14.503 7.51545 14.6874 7.07048C14.8718 6.6255 14.9667 6.14857 14.9667 5.66691C14.9667 5.18525 14.8718 4.70831 14.6874 4.26334C14.503 3.81836 14.2328 3.41408 13.8921 3.07357V3.07357Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button aria-label="go to cart" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                            <svg className="fill-stroke" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.66667 1L1 4.2V15.4C1 15.8243 1.1873 16.2313 1.5207 16.5314C1.8541 16.8314 2.30628 17 2.77778 17H15.2222C15.6937 17 16.1459 16.8314 16.4793 16.5314C16.8127 16.2313 17 15.8243 17 15.4V4.2L14.3333 1H3.66667Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 4.2002H17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.5564 7.3999C12.5564 8.2486 12.1818 9.06253 11.515 9.66264C10.8482 10.2628 9.94386 10.5999 9.00087 10.5999C8.05788 10.5999 7.15351 10.2628 6.48671 9.66264C5.81991 9.06253 5.44531 8.2486 5.44531 7.3999" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* For md screen size */}
                {/* For large screens */}
                <div className="dark:bg-gray-900 bg-white px-6 py-5">
                    <div className="lg:container lg:mx-auto flex items-center lg:justify-between">
                        <Link href={"/"} className="cursor-pointer text-gray-800 dark:text-white" aria-label="the Crib.">
                            <AppLogo />
                        </Link>
                        <div className="hidden md:flex items-center justify-end w-full">
                            <ul className="flex items-center space-x-4 me-8">
                                {
                                    NavItems.map((item) => (
                                        <li>
                                            <Link href={item.path} className="dark:text-white text-base text-gray-800 focus:ring-2 border-none ring-green-300 hover:text-[darkGreen] hover:bg-green-300 p-2 px-4 bg-opacity-10 rounded-lg">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                            <Link href={"/pricing"}>
                                <button className="px-8 py-3 font-bold rounded-md text-white bg-gradient-to-r from-[#016D5B] to-[#017973]">Packages</button>
                            </Link>
                        </div>
                        <div className="md:w-2/12 w-full flex md:hidden justify-end items-center space-x-4 xl:space-x-8">
                            <button aria-label="show options" onClick={() => setMdOptionsToggle(!mdOptionsToggle)} className="text-black dark:text-white dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button aria-label="open menu" onClick={() => setShowMenu(true)} className="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* For small screen */}
                <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}>
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
                        <Link href={"/"} className="flex items-center space-x-3">
                            <AppLogo width="150" height="30" />
                        </Link>
                        <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                            <svg className="fill-stroke text-gray-800 dark:text-white" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 p-4">
                        <ul className="flex flex-col space-y-6">
                            {
                                NavItems.map((item) => (
                                    <li>
                                        <Link href={item.path} className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            {item.name}
                                            <div>
                                                <svg className="fill-stroke text-black dark:text-white" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="h-full flex items-end mb-14">
                        <Link href={"/pricing"} className="flex flex-col bg-gray-50 w-full py-5 p-4 dark:bg-gray-800">
                            <button className=" px-8 py-3 font-bold rounded-md text-white bg-gradient-to-r from-[#016D5B] to-[#017973]">Packages</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
