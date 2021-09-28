import React from 'react'
import Layout from '../components/Layout'
import Divider from '../components/07divider'
import HeroSection from '../components/00home/Hero'
import PortifolioSection from '../components/00home/Portifolio'
import CurriculoSection from '../components/00home/Curriculo'
import SobreMimSection from '../components/00home/SobreMim'

const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
      </Layout>
      <Divider />
      <Layout>
        <PortifolioSection />
      </Layout>
      <Divider />
      <Layout>
        <CurriculoSection />
      </Layout>
      <Divider />
      <Layout>
        <SobreMimSection />
      </Layout>
    </div>
  )
}

export default Home
