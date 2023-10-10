import React from 'react'
import ArrowRight from '../svgIcons/ArrowRight'
import TickIcon from '../svgIcons/TickIcon'
import { PrivacyBannerItems } from '../Utils'

const PrivacyBanner = () => {
    return (
        <div data-aos="fade-down" className="w-full relative mx-auto py-24 px-4 md:px-6 bg-opacity-90 bg-[#016D5B]">
            <div className="md:px-60 z-30 flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="flex flex-col w-full bg-red text-center space-y-5 justify-center">
                    <h1 className="text-4xl -mb-4 md:text-3xl font-semibold text-white">Privacy is the default with ScryptX.</h1>
                    <p className="text-base pb-2 text-gray-100 md:text-md">
                        Join us for the latest updates and news. Sign up today to stay informed with ScryptX.
                    </p>
                    <div className="sm:border border-white flex-col sm:flex-row  flex items-center w-full mt-12 space-y-4 sm:space-y-0">
                        <input className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
                        <button className="px-8 py-2 w-[210px] me-1 text-white  bg-gradient-to-r from-[#01B093] to-[#00A79E] ">
                            <span className="flex text-white "> Get Started <ArrowRight width="20" className="ms-2" /></span>
                        </button>
                    </div>
                    <div className='flex justify-between'>
                        {
                            PrivacyBannerItems.map((item, ind) => (
                                <span key={ind} className='flex text-white'>
                                    <TickIcon className="me-2"/> {item.title}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PrivacyBanner