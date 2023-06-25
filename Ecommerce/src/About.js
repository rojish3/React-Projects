import React from 'react'
// import styled from 'styled-components';
import HeroSection from './components/HeroSection';

const About = () => {
  const data = {
    name: 'Ecommerce Store',
  }
  return (

    <HeroSection heading={data} />
    
  )
}

// const Wrapper = styled.section`
//   ${'' /* background-color: ${({theme}) => theme.colors.bg}; */}
//   height: 100vh;
// `;

export default About;