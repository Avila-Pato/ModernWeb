import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import FeaturedProperties from '../components/FeaturedProperties'
import Testimonial from '../components/Testimonial'
import Faq from '../components/Faq'
import Cta from '../components/Cta'

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#fffbee] to-white'>
      <Hero />
      <About />
      <FeaturedProperties />
      <Testimonial />
      <Faq />
      <Cta />
    </div>
  )
}

export default Home