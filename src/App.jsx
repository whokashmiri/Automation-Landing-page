/* eslint-disable no-unused-vars */
import { useState } from 'react'


import Hero from './components/Hero'
import HeroTextBlock from './components/HeroTextBlock'
import Companies from './components/Companies'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import BookCallSection from './components/BookCallSection'
import Footer from './components/Footer'

function App() {

  return (
  <>
   
      <Hero />
      <HeroTextBlock/>
      <Companies/>
      <HowItWorks/>
      <Services/>
      <Testimonials/>
      <Pricing/>
      <Faq/>
      <BookCallSection/>
      <Footer/>

  </>
  )
}

export default App
