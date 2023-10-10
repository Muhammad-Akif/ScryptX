import React from 'react'
import TrustedAlliesIcon from '../svgIcons/TrustedAlliesIcon'
import RingIcon from '../svgIcons/RingIcon'

const TrustedAllies = () => {
    return (
        <div className="md:px-36 relative pt-20 text-center">
            <div data-aos="fade-down" className="w-full pb-12 flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-gray-700 md:w-8/12 lg:leading-[80px]">You're Among Trusted Allies</h1>
                <p className="text-gray-500 mb-6 text-sm md:text-md lg:text-xl md:w-11/12">In a landscape marked by intricate privacy legislation and regulations, <strong>ScryptX</strong> empowers businesses of all sizes with accessible, cost-effective email encryption solutions. We simplify security, ensuring that your communication remains protected and compliant.
                <br/>
                <br/>
                Scentrics technology has garnered trust from a worldwide user base, and our Microsoft Outlook plug-in harnesses SaPaaS, their patented privacy solution. This allows seamless, standards-based encryption for messages and attachments, ensuring data security when your users hit 'send'.</p>
            </div>
            <div className='flex justify-center'>
                <TrustedAlliesIcon width='1200' height='750' />
            </div>
            <RingIcon className="absolute right-8 -bottom-28"/>
        </div>
    )
}

export default TrustedAllies