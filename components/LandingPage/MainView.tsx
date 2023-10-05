import React from 'react'
import CircleOutline from '../svgIcons/CircleOutline'
import OutlookIcon from '../svgIcons/OutlookIcon'
import AndriodIcon from '../svgIcons/AndriodIcon'
import AppleIcon from '../svgIcons/AppleIcon'
import ChromeIcon from '../svgIcons/ChromeIcon'
import WebIcon from '../svgIcons/WebIcon'
import ArrowRight from '../svgIcons/ArrowRight'

const MainView = () => {
  return (
    <div>
       <div className="pt-14">
        <button className="px-8 mb-6 py-2 rounded-full font-bold bg-opacity-10 text-[darkGreen] bg-[#007F7D]">Straightforward email security</button>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold mb-6 text-gray-700 md:w-7/12 w-[90%] lg:leading-[80px]">Preserve Your Privacy with Unbreakable Email Security</h1>
          <p className="text-gray-500 mb-6 w-[40%] text-sm md:text-md lg:text-2xl w-[80%]">There is no reason why securing your emails should be hard.
            ScrpytX the cloud-based email encryption service, designed around the needs of modern business.</p>
        </div>
        <div className="space-x-4 space-y-2 md:space-y-0">
          <button className="px-8 rounded-md py-3  text-white  bg-gradient-to-r from-[#016D5B] to-[#017973] ">
            <span className="flex font-semibold"> Get Started <ArrowRight width="20" className="ms-2" /></span>
          </button>
          <button className="px-8 rounded-md py-[0.70rem] text-[darkGreen] border border-[darkGreen]">Why You Choose ScryptX</button>
        </div>
      </div>
      <div className="relative h-full md:h[400px] -mt-24 overflow-hidden md:overflow-visible md:mt-36 flex flex-col justify-center items-center">
        <CircleOutline className="absolute -z-10" />
        <div className="pt-60 md:pt-0">
          <h3 className="md:mb-10 mb-6 font-semibold">ScryptX Compatible With</h3>
          <div className="flex space-y-2 pb-4 md:pb-0 md:space-y-0 justify-center flex-col md:flex-row items-center">
            <OutlookIcon />
            <AndriodIcon />
            <AppleIcon />
            <ChromeIcon />
            <WebIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainView