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
            {/* <div className="md:px-36 md:flex justify-center space-x-3 2xl:justify-items-end items-center ">
                <div className='relative overflow-hidden'>
                    <OrganizationNeedIcon />
                    <div className="absolute bottom-8">
                        <div className=' w-[140%] pt-96 pb-10 md:px-24 px-4'>
                            <p className="w-[55%] pb-3 text-2xl  font-semibold leading-9 text-left">
                                A Straight Forward Solution To A Complex Problem
                            </p>
                            <button className="px-8 rounded-md py-[0.70rem] text-[#016D5B] border border-[#016D5B] flex">Explore More <ArrowRight color={"#016D5B"} /></button>
                        </div>
                    </div>
                </div>
                <div className=' bg-[#007F7D] text-left py-[55px] rounded-md  p-14 xl:min-h-[482px]'>
                    <p className="lg:text-4xl md:text-3xl text-3xl font-semibold md:text-left text-cente text-white">
                        A simple plug-in
                    </p>
                    <p className=" text-white max-w-[624px] w-full mt-6 md:text-left text-md text-center">
                        <strong className='text-white'>ScryptX</strong> have combined two key components: the Scentrics security and privacy service, and a suite of tools for mobile, desktop and web. This means there are no new applications to install on your servers and there is no testing necessary. Because its functionality is embedded within your email client,  <strong className='text-white'>ScryptX</strong> is incredibly easy for your users to pick up. No training is required and whether it is accessed on a desktop or mobile device, there is practically no interruption to the user's workflow - just one extra click to add encryption to a message.
                    </p>
                </div>
            </div> */}
            <div className="w-full mx-auto py-9 md:py-12 bg-opacity-90">
                <div className="md:px-36 px-24 py-2 md:py-0 flex items-center justify-center flex-col md:flex-row ">
                    <div className="relative flex rounded-lg flex-col md:flex-row justify-between items-center">
                            <OrganizationNeedIcon />
                            <div className="absolute bottom-8">
                                <div className=' w-[140%] pt-96 pb-10 md:px-24 px-4'>
                                    <p className="w-[55%] pb-3 text-2xl  font-semibold leading-9 text-left">
                                        A Straight Forward Solution To A Complex Problem
                                    </p>
                                    <button className="px-8 rounded-md py-[0.70rem] text-[#016D5B] border border-[#016D5B] flex">Explore More <ArrowRight color={"#016D5B"} /></button>
                                </div>
                            </div>
                    </div>
                    <div className=' bg-[#007F7D] flex flex-col px-12 py-11 justify-center items-center relative text-left scale-110 rounded-md 2xl:min-h-[440px]'>
                        <p className="lg:text-4xl md:text-3xl text-3xl w-full font-semibold md:text-left text-cente text-white">
                            A simple plug-in
                        </p>
                        <p className=" text-white max-w-[350px] w-full mt-6 md:text-left text-sm text-center leading-6">
                            <strong className='text-white'>ScryptX</strong> have combined two key components: the Scentrics security and privacy service, and a suite of tools for mobile, desktop and web. This means there are no new applications to install on your servers and there is no testing necessary. Because its functionality is embedded within your email client,  <strong className='text-white'>ScryptX</strong> is incredibly easy for your users to pick up. No training is required and whether it is accessed on a desktop or mobile device, there is practically no interruption to the user's workflow - just one extra click to add encryption to a message.
                        </p>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default OrgNeeds