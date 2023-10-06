import React from 'react'
import { ResolveQueriesItems } from '../Utils'

const ResolveQueries = () => {
    return (
        <div className="relative py-24 md:px-72 text-center bg-gray-50">
            <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-gray-700 md:w-8/12 lg:leading-[80px]">How Can We Resolve Your Queries</h1>
                <p className="text-gray-500 text-sm md:text-md lg:text-xl md:w-7/12"><strong className='text-[#373F51]'>ScryptX</strong> offers a hassle-free experience with smooth integration, top-notch security, and cost-effective simplicity, ensuring your productivity soars effortlessly.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-8 gap-4 pt-20'>
                {
                    ResolveQueriesItems.map(item => (
                        <div
                            className="group hover:scale-105 cursor-pointer rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        >
                            <div className="ring-1 p-2 mb-3 ring-[#016D5B] rounded-full w-10">
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
        </div>
    )
}

export default ResolveQueries