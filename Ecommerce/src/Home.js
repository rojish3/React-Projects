import React from 'react'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';

const Home = () => {
  const data = {
    name: 'Gadget Store',
  }
  return (
    <>
      <HeroSection heading={data} />
      <Services />
      <Trusted />
    </>
  )
}

export default Home;