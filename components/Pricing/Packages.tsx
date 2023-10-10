import React from 'react'
import TickIcon from '../svgIcons/TickIcon'
import CrossIcon from '../svgIcons/CrossIcon'

const Packages = () => {
    return (
        // < !--component -- >
        <section className="bg-white py-20 dark:bg-gray-800">
            <div className="w-full text-center flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-gray-700 md:w-8/12 lg:leading-[80px]">Affordably Elevate Your Experience</h1>
                <p className="text-gray-500 text-sm md:text-md lg:text-xl md:w-7/12">Discover customized, cost-effective solutions for your cryptographic requirements through our portal. Explore our pricing choices to discover the ideal package for harnessing the potential of secure data encryption
                </p>
            </div>
            <div className="relative md:mx-36 px-12 mt-14 py-8 mx-auto border">
                <div className='w-full flex justify-center items-center'>
                    <div className="flex absolute -top-7 z-20 bg-gray-50 items-strech justify-between ">
                        <div className='flex justify-center items-center border py-3 px-6'>
                            <div className='pe-4'>
                                <span className="flex font-semibold text-[#016D5B]"> Monthly Packages </span>
                            </div>
                            <div className='h-[80%] border-l-2 border-[#016D5B]' />
                            <div className='ps-4'>
                                <span className="flex font-semibold"> Annual Packages </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="p-6 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                        <p className="text-lg font-medium text-[#016D5B] dark:text-gray-100">Upgrade</p>
                        <h4 className="mt-2 text-4xl relative font-semibold text-gray-800 dark:text-gray-100">Free</h4>
                        <button className=" py-1 mt-2 rounded-full bg-opacity-10 text-gray-800 bg-gray-700 w-24 text-sm">For Month</button>
                        <p className="mt-4 text-gray-500 dark:text-gray-300">If you have been sent an encrypted email and have a read only account select this option to upgrade</p>
                        <div className="mt-5 space-y-5">
                            <hr />
                            <div className="flex items-center">
                                <TickIcon color="#016D5B" />


                                <span className="mx-4 text-gray-700 dark:text-gray-300">Windows Outlook & mobile
                                    support.
                                </span>
                            </div>

                            <div className="flex items-center">
                                <TickIcon color="#016D5B" />


                                <span className="mx-4 text-gray-700 dark:text-gray-300">Send and receive encrypted
                                    email.
                                </span>
                            </div>

                            <div className="flex items-center">
                                <TickIcon color="#016D5B" />


                                <span className="mx-4 text-gray-700 dark:text-gray-300">Free for 30 days</span>
                            </div>

                            <div className="flex items-center">
                                <CrossIcon />



                                <span className="mx-4 text-gray-700 dark:text-gray-300">Control encrypted email
                                    recipients.
                                </span>
                            </div>

                            <div className="flex items-center">
                                <CrossIcon />



                                <span className="mx-4 text-gray-700 dark:text-gray-300">Manage users in your
                                    organization.</span>
                            </div>
                        </div>

                        <button className=" px-8 py-3 font-bold rounded-md w-full mt-8 text-white bg-gradient-to-r from-[#016D5B] to-[#017973]">Choose Plan</button>
                        <p className='text-gray-700 text-center pt-2'>$79.99/month when renewing</p>

                    </div>

                    <div className="p-6 transition-colors duration-200 transform bg-gradient-to-r from-[#016D5B] to-[#017973] rounded-lg dark:bg-gray-600">
                        <div className='flex w-full justify-between'>
                            <p className="text-lg font-medium text-white">Personal</p>


                            <div
                                className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                            >
                                🔥
                                Popular
                            </div>
                        </div>
                        <h4 className="mt-2 text-4xl font-semibold text-gray-100">1500<span className="text-lg ps-[1px] absolute font-semibold">£</span></h4>
                        <button className=" py-1 mt-2 rounded-full bg-opacity-10 text-white bg-white w-24 text-sm">For Month</button>
                        <p className="mt-4 text-white">For individuals and SME's who don't want or need centralized control over their organization's users.</p>

                        <div className="mt-5 space-y-5">
                            <hr />
                            <div className="flex items-center">
                                <TickIcon color="#ffff" />


                                <span className="mx-4 text-white">Windows Outlook & mobile
                                    support.
                                </span>
                            </div>

                            <div className="flex items-center">
                                <TickIcon color="#ffff" />


                                <span className="mx-4 text-white">Send and receive encrypted
                                    email.
                                </span>
                            </div>

                            <div className="flex items-center">
                                <TickIcon color="#ffff" />


                                <span className="mx-4 text-white">Free for 30 days</span>
                            </div>

                            <div className="flex items-center">
                                <CrossIcon color="#01B093" />


                                <span className="mx-4 text-white">Control encrypted email
                                    recipients.
                                </span>
                            </div>

                            <div className="flex items-center">
                                <CrossIcon color="#01B093" />


                                <span className="mx-4 text-white">Manage users in your
                                    organization.</span>
                            </div>
                        </div>

                        <button className="rounded-md px-8 py-3 font-bold mt-8 w-full text-center text-white  bg-gradient-to-r from-[#01B093] to-[#00A79E] ">
                            Choose Plan
                        </button>
                        <p className='text-white text-center pt-2'>$79.99/month when renewing</p>
                    </div>

                    <div className="p-6 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                        <p className="text-lg font-medium text-[#016D5B] dark:text-gray-100">Exterprise</p>


                        <h4 className="mt-2 text-4xl font-semibold text-gray-700 dark:text-gray-100">3000 <span className="text-lg text-gray-700 absolute ps-[1px] font-semibold">£</span></h4>
                        <button className=" py-1 mt-2 rounded-full bg-opacity-10 text-gray-800 bg-gray-700 w-24 text-sm">For Month</button>

                        <p className="mt-4 text-gray-500 dark:text-gray-300">For those who need control over their organisation's users and their capabilities</p>

                        <div className="mt-5 space-y-5">
                            <hr />

                            <div className="flex items-center">
                                <TickIcon color="#016D5B" />

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Windows Outlook & mobile
                                    support.
                                </span>
                            </div>

                            <div className="flex items-center">
                                <TickIcon color="#016D5B" />


                                <span className="mx-4 text-gray-700 dark:text-gray-300">Send and receive encrypted
                                    email.
                                </span>
                            </div>

                            <div className="flex items-center">
                                <TickIcon color="#016D5B" />


                                <span className="mx-4 text-gray-700 dark:text-gray-300">Free for 30 days</span>
                            </div>

                            <div className="flex items-center">
                                <TickIcon color="#016D5B" />


                                <span className="mx-4 text-gray-700 dark:text-gray-300">Control encrypted email
                                    recipients.
                                </span>
                            </div>

                            <div className="flex items-center">
                                <TickIcon color="#016D5B" />


                                <span className="mx-4 text-gray-700 dark:text-gray-300">Manage users in your
                                    organization.</span>
                            </div>
                        </div>

                        <button className=" px-8 py-3 font-bold rounded-md w-full mt-8 text-white bg-gradient-to-r from-[#016D5B] to-[#017973]">Choose Plan</button>
                        <p className='text-gray-700 text-center pt-2'>$79.99/month when renewing</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Packages