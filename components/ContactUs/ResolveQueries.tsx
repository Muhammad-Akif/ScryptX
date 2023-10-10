import React from 'react'
import { ResolveQueriesItems } from '../Utils'

const ResolveQueries = () => {
    return (
        <div className="relative py-24 md:px-36 text-center bg-gray-50">
            <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-gray-700 md:w-8/12 lg:leading-[80px]">How Can We Resolve Your Queries</h1>
                <p className="text-gray-500 text-sm md:text-lg md:w-10/12"><strong className='text-[#373F51]'>ScryptX</strong> offers a hassle-free experience with smooth integration, top-notch security, and cost-effective simplicity, ensuring your productivity soars effortlessly.</p>
            </div>
            <div className='text-left grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-8 gap-4 pt-20'>
                {
                    ResolveQueriesItems.map((item, ind) => (
                        <div
                        key={ind}
                            className={`group cursor-pointer rounded-lg ${ind !== 1 ? "border-x-2" : "" } px-5 py-10 transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30`}
                        >
                            <div className="ring-1 p-2 mb-3 ring-[#016D5B] rounded-full w-10">
                                <item.Icon />
                            </div>
                            <h2 className={`mb-3 text-2xl font-semibold text-[#016D5B]`}>
                                {item.title}
                            </h2>
                            <p className={`mb-3 max-w-[30ch] text-sm opacity-50`}>
                                {item.description}
                            </p>
                            <a className='underline'>
                                {item?.address}
                            </a>
                            <a className='underline'>
                                {item?.contact1}
                            </a>
                            <br />
                            <a className='underline'>
                                {item?.contact2}
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ResolveQueries