import React from 'react'
import PeopleUsingIcon from '../svgIcons/PeopleUsingIcon'

const PeopleUsing = () => {
    return (
        <div data-aos="fade-up" className="py-20 text-center">
            <button className="px-8 mb-6 py-2 rounded-full bg-opacity-10 text-[#016D5B] bg-[#007F7D]">Advantages</button>
            <div className="w-full pb-12 flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-gray-700 md:w-8/12 lg:leading-[80px]">Over 100 million people and businesses have Already Using ScryptX
                </h1>
                <p className="text-gray-500 mb-6 text-sm md:text-md lg:text-2xl md:w-7/12"><strong>ScryptX</strong> offers a hassle-free experience with smooth integration, top-notch security, and cost-effective simplicity, ensuring your productivity soars effortlessly.</p>
            </div>
            <div className='flex justify-center'>
                <PeopleUsingIcon />
            </div>
        </div>
    )
}

export default PeopleUsing