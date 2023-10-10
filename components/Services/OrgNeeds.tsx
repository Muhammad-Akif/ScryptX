import React from 'react'
import OrganizationNeedIcon from '../svgIcons/OrganizationNeedIcon'
import ArrowRight from '../svgIcons/ArrowRight'

const OrgNeeds = () => {
    return (
        <div className="relative pt-20 text-center bg-gray-50">
            <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-gray-700 md:w-9/12 lg:leading-[80px]">Essential Services Every Organization Needs</h1>
                <p className="text-gray-500 text-sm md:text-md lg:text-xl md:w-9/12">Discover customized, cost-effective solutions for your cryptographic requirements through our portal. Explore our pricing choices to discover the ideal package for harnessing the potential of secure data encryption
                </p>
            </div>
            <div className="px-4">
                <div className="md:px-64 md:flex justify-between items-center">
                    <div className='w-8/12'>
                        <div className="relative">
                            <OrganizationNeedIcon className="z-10" height='800' width='900' />
                            <div className="absolute lg:bottom-[100px] md:bottom-3 bottom-0">
                                <div className='bg-white bg-opacity-20 w-[140%] md:px-24 py-10 px-4'>
                                    <p className="w-[50%] pb-3 md:text-2xl text-2xl font-semibold leading-9 text-left">
                                        A Straight Forward Solution To A Complex Problem
                                    </p>
                                    <button className="px-8 rounded-md py-[0.70rem] text-[darkGreen] border border-[darkGreen] flex">Explore More <ArrowRight color={"darkGreen"} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-4/12 bg-[#007F7D] text-left py-[55px] rounded-md p-14'>
                        <p className="lg:text-4xl md:text-3xl text-3xl font-semibold md:text-left text-cente text-white">
                            A simple plug-in
                        </p>
                        <p className=" text-white max-w-[624px] w-full mt-6 md:text-left text-lg text-center">
                            <strong className='text-white'>ScryptX</strong> have combined two key components: the Scentrics security and privacy service, and a suite of tools for mobile, desktop and web. This means there are no new applications to install on your servers and there is no testing necessary. Because its functionality is embedded within your email client,  <strong className='text-white'>ScryptX</strong> is incredibly easy for your users to pick up. No training is required and whether it is accessed on a desktop or mobile device, there is practically no interruption to the user's workflow - just one extra click to add encryption to a message.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrgNeeds