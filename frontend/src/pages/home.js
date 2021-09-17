import React from 'react'
import HeroSection from '../components/home/Hero'
import Divider from '../components/divider'
import PortifolioSection from '../components/home/Portifolio'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Divider />
      <PortifolioSection />
      <Divider />
    </div>
  )
}

export default Home
