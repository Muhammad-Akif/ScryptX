import Compliance from '@/components/AboutUs/Compliance'
import MainView from '@/components/AboutUs/MainView'
import TrustedAllies from '@/components/AboutUs/TrustedAllies'
import BookDemoBanner from '@/components/LandingPage/BookDemoBanner'
import PrivacyBanner from '@/components/LandingPage/PrivacyBanner'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <MainView />
      <Compliance />
      <div className="h-full bg-[url('/background.svg')] flex flex-col bg-no-repeat bg-cover text-center">
        <BookDemoBanner title="Become a ScrytpX Member" />
      </div>
      <TrustedAllies />
      <PrivacyBanner />
    </div>
  )
}

export default AboutUs