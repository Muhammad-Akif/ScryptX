import React from 'react'
import ComplainceIcon from '../svgIcons/ComplainceIcon'
import ArrowRight from '../svgIcons/ArrowRight'

const Compliance = () => {
    return (
        <div className="w-full relative mx-auto pt-24 px-4 md:px-6 bg-opacity-90 ">
            <div className="md:px-72 z-30 flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="flex flex-col space-y-5 justify-center md:w-1/2 text-left">
                    <h1 className="text-4xl md:text-3xl font-semibold text-[#373F51]">Compliance made easy</h1>
                    <p className="text-base py-2 text-gray-500 md:text-md">
                        We launched <strong className='text-[#373F51]'>ScryptX</strong> in the summer of 2014 after a successful public crowdfunding campaign in which over 10,000 individuals donated over $500,000 to bring our shared vision to life. Since then, <strong className='text-[#373F51]'>ScryptX</strong> has grown to become the world's leading privacy company, used by millions globally, but we have never forgotten our humble beginnings. 
                    <br />
                    <br/>
                        <strong className='text-[#373F51]'>ScryptX</strong> exists to serv e the world. Our first and only obligation is always to the <strong className='text-[#373F51]'>ScryptX</strong> community, not advertisers or other third parties. We do not compromise your trust by selling your data and never will & that's our top priority.              </p>
                                            <button className="px-8 rounded-sm py-3 md:w-[56%] text-white  bg-gradient-to-r from-[#016D5B] to-[#017973] ">
                        <span className="flex font-semibold"> Create Your Free Account <ArrowRight width="20" className="ms-2" /></span>
                    </button>
                </div>
                <div className="md:w-1/2 relative  md:mt-0 flex flex-col justify-center md:justify-end">
                        <ComplainceIcon />
                </div>
            </div>
        </div>
    )
}

export default Compliance