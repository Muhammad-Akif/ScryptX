'use client'
import BookDemoBanner from "@/components/LandingPage/BookDemoBanner";
import MainView from "@/components/LandingPage/MainView";
import PeopleUsing from "@/components/LandingPage/PeopleUsing";
import PrivacyBanner from "@/components/LandingPage/PrivacyBanner";
import PrivacyTrust from "@/components/LandingPage/PrivacyTrust";
import RapidBenefits from "@/components/LandingPage/RapidBenefits";
import TrustedPeopleBanner from "@/components/LandingPage/TrustedPeopleBanner";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'; // Import AOS CSS


export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      // once: true,
      offset: 50,
    });
  }, []);
  return (
    <main>
      <div className="h-full bg-[url('/background.svg')] flex flex-col bg-no-repeat bg-cover text-center">
        <MainView />
        <BookDemoBanner title="Why You Choose ScryptX"/>
      </div>
      <RapidBenefits/>
      <TrustedPeopleBanner />
      <PrivacyTrust />
      <PrivacyBanner />
      <PeopleUsing />
    </main>
  )
}
