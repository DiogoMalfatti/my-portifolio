import React from 'react'
import Divider from '../components/07divider'
import HeroSection from '../components/00home/Hero'
import PortifolioSection from '../components/00home/Portifolio'
import CurriculoSection from '../components/00home/Curriculo'
import SobreMimSection from '../components/00home/SobreMim'

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
