import Compliance from '@/components/AboutUs/Compliance'
import MainView from '@/components/AboutUs/MainView'
import TrustedAllies from '@/components/AboutUs/TrustedAllies'
import BookDemoBanner from '@/components/LandingPage/BookDemoBanner'
import PrivacyBanner from '@/components/LandingPage/PrivacyBanner'
import { MainViewDetails } from '@/components/Utils'
import React, { useEffect } from 'react'

const AboutUs = () => {
  const { title, description } = MainViewDetails[0]
  return (
    <div>
      <MainView title={title} description={description}/>
      <Compliance />
      <div className="h-full flex flex-col text-center">
        <BookDemoBanner title="Become a ScrytpX Member" />
      </div>
      <TrustedAllies />
      <PrivacyBanner />
    </div>
  )
}

export default AboutUs