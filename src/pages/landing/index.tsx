import React from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/landing/HeroSection'
import DebateFormats from '@/components/landing/debateFormat'
import AdvancedFeatures from '@/components/landing/AdvanceFeature'
import JourneySection from '@/components/landing/JourneySection'
import TopDebaters from '@/components/landing/TopDebater'
import Pricing from '@/components/landing/Pricing'
import SuccessStories from '@/components/landing/SuccessStories'
import ContactUs from '@/components/landing/ContactUs'
import Footer from '@/components/Footer'
function Index() {
  return (
    <div>
      <Header />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="debate-formats">
        <DebateFormats />
      </section>
      <section id="advanced-features">
        <AdvancedFeatures />
      </section>
      <section id="journey">
        <JourneySection />
      </section>
      <section id="top-debaters">
        <TopDebaters />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="success-stories">
        <SuccessStories />
      </section>
      <section id="contact-us">
        <ContactUs />
      </section>
      <Footer/>
    </div>
  )
}

export default Index
