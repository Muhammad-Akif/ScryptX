import React from 'react'
import { BenefitsPackageItems } from '../Utils'

const BenifitPackage = () => {
    return (
        <div className='relative pb-24'>
            <div className='absolute w-full bg-[#016D5B] h-[52%] -top-12 ' />
            <div className="w-full md:px-36 relative mx-auto mt-24 px-4 bg-opacity-90">
                <div className=" py-2 md:py-0 flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                    <div className="flex space-y-5 flex-col justify-center md:w-1/2 text-left">
                        <button className=" py-1 rounded-full bg-opacity-10 text-white bg-white w-32 text-sm font-semibold">Advantages</button>
                        <h1 className="text-4xl pbmd:text-3xl text-white font-semibold lg:leading-[50px]">All These Packages Includes Following Benefits
                        </h1>
                    </div>
                    <div className="md:w-1/2 md:mt-0 pt-5 flex justify-center md:justify-end">
                        <p className="text-gray-200 text-sm md:text-md lg:text-xl pt-12"><strong className='text-white'>ScryptX</strong> offers a hassle-free experience with smooth integration, top-notch security, and cost-effective simplicity, ensuring your productivity soars effortlessly.</p>

                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-8 gap-4 pt-20'>
                    {
                        BenefitsPackageItems.map((item, ind) => (
                            <div
                            key={ind}
                                className="group bg-white hover:scale-105 cursor-pointer rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                            >
                                <div className="mb-3">
                                    <item.Icon />
                                </div>
                                <h2 className={`mb-3 text-2xl font-semibold text-[#016D5B]`}>
                                    {item.title}
                                </h2>
                                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                                    {item.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div >
        </div>
    )
}

export default BenifitPackage