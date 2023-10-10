import React from 'react'
import BannerCircleIcon from '../svgIcons/BannerCircleIcon'
interface Props {
    title: string;
    description: string;
}
const MainView = ({ title, description }: Props) => {
    return (
        <div className="w-full relative mx-auto bg-opacity-90 bg-[#016D5B]">
            <div className=" py-36 flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="flex md:w-[52%] flex-col space-y-5 justify-center text-center">
                    <h1 className="text-3xl md:text-[44px] font-bold text-white">{title}</h1>
                    <p className="text-md py-2 text-gray-100 md:text-md">
                        {description}
                    </p>
                </div>
            </div>
            <BannerCircleIcon height='600' className="absolute bottom-0 z-10 right-0 " />
        </div >
    )
}

export default MainView