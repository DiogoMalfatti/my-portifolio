import React from 'react'
import Divider from '../components/divider'
import HeroSection from '../components/home/Hero'
import PortifolioSection from '../components/home/Portifolio'
import CurriculoSection from '../components/home/Curriculo'
import SobreMimSection from '../components/home/SobreMim'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Divider />
      <PortifolioSection />
      <Divider />
      <CurriculoSection />
      <Divider />
      <SobreMimSection />
    </div>
  )
}

export default Home
