import React from 'react'
import MountainBack from '../svgIcons/MountainBack';
import ArrowRight from '../svgIcons/ArrowRight';

const BookDemoBanner = ({ title }: { title: string }) => {
    return (
        <div className="w-full mx-auto py-9 mt-36 md:py-12 bg-opacity-90 bg-[#016D5B]">
            <div className="md:px-36 px-24 py-2 md:py-0 flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="md:w-[30%] lg:w-[40%] rounded-lg bg-gray-50 px-6 py-8 flex flex-col justify-center relative">
                    <div className="flex flex-col justify-center z-20 text-left">
                        <h4 className='text-gray-500 text-sm md:text-md pb-4'>Let’s Connect</h4>
                        <h1 className="text-4xl md:text-3xl font-semibold text-[#016D5B]">Book Your
                            Demo Today</h1>
                        <p className="text-base py-2 text-gray-500 md:text-md">
                            Experience our cutting-edge technology in action! Book a demo today  and discover the future of innovation.
                        </p>
                    </div>
                    <div className="flex justify-end md:absolute z-21 bottom-4 right-0">
                        <MountainBack />
                    </div>
                </div>
                <div className="flex rounded-lg flex-col md:flex-row items-strech justify-between w-[100%] bg-white bg-opacity-5 py-6 px-6">
                    <div className="flex flex-col space-y-3 justify-center md:w-1/2 text-left">
                        <h1 className="text-4xl md:text-3xl font-semibold text-white">{title}</h1>
                        <p className="text-base py-2 text-gray-100 md:text-md">
                            Experience our cutting-edge technology in action! Book a demo today  and discover the future of innovation.
                        </p>
                        <button className="px-8 rounded-md py-3 md:w-[185px] text-white  bg-gradient-to-r from-[#01B093] to-[#00A79E] ">
                            <span className="flex text-white font-semibold"> Get Started <ArrowRight width="20" className="ms-2" /></span>
                        </button>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                        <div className='flex justify-center items-center'>
                            <div className='pe-8'>
                                <h1 className="text-4xl md:text-3xl font-semibold text-white">1200</h1>
                                <p className="text-base py-2 text-gray-100 md:text-md">
                                    Satisfied Clients
                                </p>
                            </div>
                            <div className='h-[80%] border-l-2 border-white opacity-30'/>
                            <div className='ps-4'>
                                <h1 className="text-4xl md:text-3xl font-semibold text-white">120K</h1>
                                <p className="text-base py-2 text-gray-100 md:text-md">
                                    Chrome Extensions Installed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookDemoBanner;
