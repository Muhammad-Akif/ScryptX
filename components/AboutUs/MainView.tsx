import React from 'react'
import BannerCircleIcon from '../svgIcons/BannerCircleIcon'

const MainView = () => {
    return (
        <div className="w-full relative mx-auto px-4 md:px-6 bg-opacity-90 bg-[#016D5B]">
            <div className=" py-36 flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="flex md:w-[45%] flex-col space-y-5 justify-center text-center">
                    <h1 className="text-3xl md:text-[44px] font-bold text-white">Envisioning A Private Digital World</h1>
                    <p className="text-base py-2 text-gray-100 md:text-md">
                        ScryptX was founded in United States Of America in 2014 by a group of scientists who had met at CERN (the European Organization for Nuclear Research). Their mission is to create a superior internet ecosystem with privacy as the default setting.
                    </p>
                </div>
            </div>
            <BannerCircleIcon height='600' className="absolute bottom-0 z-10 right-0 " />
        </div >
    )
}

export default MainView