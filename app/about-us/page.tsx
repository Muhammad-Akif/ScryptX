'use client'
import Compliance from '@/components/AboutUs/Compliance'
import MainView from '@/components/AboutUs/MainView'
import TrustedAllies from '@/components/AboutUs/TrustedAllies'
import BookDemoBanner from '@/components/LandingPage/BookDemoBanner'
import PrivacyBanner from '@/components/LandingPage/PrivacyBanner'
import { MainViewDetails } from '@/components/Utils'
import React, { useEffect } from 'react'
import AOS from "aos";
import 'aos/dist/aos.css'; // Import AOS CSS

const AboutUs = () => {
  const { title, description } = MainViewDetails[0]
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      // once: true,
      offset: 50,
    });
  }, []);
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