import MainView from '@/components/AboutUs/MainView'
import PrivacyBanner from '@/components/LandingPage/PrivacyBanner'
import BenifitPackage from '@/components/Pricing/BenifitPackage'
import Packages from '@/components/Pricing/Packages'
import { QuickConcerns } from '@/components/Services/QuickConcerns'
import { MainViewDetails } from '@/components/Utils'
import React from 'react'

const page = () => {
    const { title, description } = MainViewDetails[3]
    return (
        <div>
            <MainView title={title} description={description} />
            <Packages/>
            <BenifitPackage/>
            <QuickConcerns/>
            <PrivacyBanner/>
        </div>
    )
}

export default page