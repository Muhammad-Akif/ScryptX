import React from 'react'
import ArrowRight from '../svgIcons/ArrowRight'
import TrustedPeopleIcon from '../svgIcons/TrustedPeopleIcon'
import PlayIcon from '../svgIcons/PlayIcon'
import BannerCircleIcon from '../svgIcons/BannerCircleIcon'

const TrustedPeopleBanner = () => {
    return (
        <div className="w-full relative mx-auto mt-36 px-4 md:px-6 bg-opacity-90 bg-[#016D5B]">
            <div className="md:px-72 z-30 flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="flex flex-col space-y-5 justify-center md:w-1/2 text-left">
                    <h1 className="text-4xl md:text-3xl font-semibold text-white"><strong>ScryptX</strong> is trusted by tens of millions of people worldwide to safeguard their confidential communications.</h1>
                    <p className="text-base py-2 text-gray-100 md:text-md">
                        Expanding its protective reach through a user-friendly app, ScryptX ensures the security of your data while you're on the move
                    </p>
                    <button className="px-8 rounded-sm py-3 md:w-[56%] text-white  bg-white ">
                        <span className="flex text-[darkGreen] font-semibold"> Create Your Free Account <ArrowRight color="darkGreen" width="20" className="ms-2" /></span>
                    </button>
                </div>
                <div className="md:w-1/2 relative  md:mt-0 flex flex-col justify-center md:justify-end">
                    <BannerCircleIcon height='600' className="bottom-0 z-10 right-0 " />
                    <div className='absolute top-20 right-0'>
                        <TrustedPeopleIcon />
                        <PlayIcon className="text-center w-full animate-ping duration-500" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TrustedPeopleBanner