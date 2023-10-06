import React from 'react'
import MountainBack from '../svgIcons/MountainBack';
import ArrowRight from '../svgIcons/ArrowRight';

const BookDemoBanner = ({ title }: { title: string }) => {
    return (
        <div className="w-full mx-auto py-9 mt-36 md:py-12 px-4 md:px-6 bg-opacity-90 bg-[#016D5B]">
            <div className="2xl:px-72 px-24 py-2 md:py-0 flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div data-aos="fade-right" className=" rounded-lg bg-gray-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                    <div className="flex flex-col justify-center z-20 text-left">
                        <h4 className='text-gray-500 text-sm md:text-md'>Let’s Connect</h4>
                        <h1 className="text-4xl md:text-3xl font-semibold text-[#016D5B]">Book Your
                            Demo Today</h1>
                        <p className="text-base py-2 text-gray-500 md:text-md">
                            Experience our cutting-edge technology in action! Book a demo today  and discover the future of innovation.
                        </p>
                    </div>
                    <div className="flex justify-end md:absolute z-21 md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                        <MountainBack />
                    </div>
                </div>
                <div data-aos="fade-left" className="flex rounded-lg flex-col md:flex-row items-strech justify-between w-[100%] bg-white bg-opacity-5 py-6 px-6">
                    <div className="flex flex-col justify-center md:w-1/2 text-left">
                        <h1 className="text-4xl md:text-3xl font-semibold text-white">{title}</h1>
                        <p className="text-base py-2 text-gray-100 md:text-md">
                            Experience our cutting-edge technology in action! Book a demo today  and discover the future of innovation.
                        </p>
                        <button className="px-8 rounded-md py-3 md:w-[60%] text-white  bg-gradient-to-r from-[#01B093] to-[#00A79E] ">
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
                            <div className='h-[80%] border-l-4 border-[#016D5B]' />
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
