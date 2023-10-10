import React from 'react'
import { BenefitsItems } from '../Utils'

const RapidBenefits = () => {
    return (
        <div className="w-full md:px-36 relative mx-auto mt-24 px-4 bg-opacity-90">
            <div className=" py-2 md:py-0 flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="flex space-y-5 flex-col justify-center md:w-1/2 text-left">
                    <button className=" py-1 rounded-full bg-opacity-10 text-[darkGreen] bg-[#007F7D] w-32 text-sm font-semibold">Advantages</button>
                    <h1 className="text-4xl pbmd:text-3xl font-semibold lg:leading-[50px]">Get a Rapid Overview of <strong className='text-[#016D5B]'>ScryptX's</strong> Benefits
                    </h1>
                </div>
                <div className="md:w-1/2 md:mt-0 pt-5 flex justify-center md:justify-end">
                    <p className="text-gray-500 text-sm md:text-md lg:text-xl pt-12"><strong>ScryptX</strong> offers a hassle-free experience with smooth integration, top-notch security, and cost-effective simplicity, ensuring your productivity soars effortlessly.</p>

                </div>
            </div>
            <div data-aos="zoom-out-down" className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-8 gap-4 pt-20'>
                {
                    BenefitsItems.map((item, ind) => (
                        <div
                        key={ind}
                            className="group hover:scale-105 cursor-pointer rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        >
                            <div  className="ring-1 p-2 mb-3 ring-[#016D5B] rounded-full w-10">
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
    )
}

export default RapidBenefits