import React from 'react'

const Packages = () => {
    return (
        // < !--component -- >
        <section className="bg-white py-20 dark:bg-gray-800">
            <div className="w-full text-center flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-gray-700 md:w-8/12 lg:leading-[80px]">Affordably Elevate Your Experience</h1>
                <p className="text-gray-500 text-sm md:text-md lg:text-xl md:w-7/12">Discover customized, cost-effective solutions for your cryptographic requirements through our portal. Explore our pricing choices to discover the ideal package for harnessing the potential of secure data encryption
                </p>
            </div>
            <div className="container relative px-16 mt-14 py-8 mx-auto border">
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
                    <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                        <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Upgrade</p>
                        <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">Free <span className="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span></h4>
                        <p className="mt-4 text-gray-500 dark:text-gray-300">If you have been sent an encrypted email and have a read only account select this option to upgrade</p>

                        <div className="mt-8 space-y-8">
                        <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Windows Outlook & mobile 
support.
</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Send and receive encrypted 
email.
</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Free for 30 days</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited users</span>
                            </div>
                        </div>

                        <button className=" px-8 py-3 font-bold rounded-md w-full mt-8 text-white bg-gradient-to-r from-[#016D5B] to-[#017973]">Choose Plan</button>

                    </div>

                    <div className="px-6 py-8 transition-colors duration-200 transform bg-gradient-to-r from-[#016D5B] to-[#017973] rounded-lg dark:bg-gray-600">
                        <div className='flex w-full justify-between'>
                            <p className="text-lg font-medium text-gray-100">Personal</p>


                            <div
                                className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full"
                            >
                                🔥
                                Popular
                            </div>
                        </div>
                        <h4 className="mt-2 text-4xl font-semibold text-gray-100">155€ <span className="text-base font-normal text-gray-400">/ Month</span></h4>
                        <p className="mt-4 text-gray-300">For individuals and SME's who don't want or need centralized control over their organization's users.</p>

                        <div className="mt-8 space-y-8">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-300">Windows Outlook & mobile
                                    support.
                                </span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-300">Send and receive encrypted
                                    email.
                                </span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-300">Free for 30 days</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-300">Optimize hashtags</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-300">Unlimited users</span>
                            </div>
                        </div>

                        <button className="rounded-md px-8 py-3 font-bold mt-8 w-full text-center text-white  bg-gradient-to-r from-[#01B093] to-[#00A79E] ">
                            Choose Plan
                        </button>
                    </div>

                    <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                        <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Exterprise</p>


                        <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">199€ <span className="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span></h4>
                        <p className="mt-4 text-gray-500 dark:text-gray-300">For those who need control over their organisation's users and their capabilities</p>

                        <div className="mt-8 space-y-8">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Windows Outlook & mobile 
support.
</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Send and receive encrypted 
email.
</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Free for 30 days</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                            </div>

                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>

                                <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited users</span>
                            </div>
                        </div>

                        <button className=" px-8 py-3 font-bold rounded-md w-full mt-8 text-white bg-gradient-to-r from-[#016D5B] to-[#017973]">Choose Plan</button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Packages