import React from 'react'
// import styled from 'styled-components';
import HeroSection from './components/HeroSection';
import { useProductContext } from './context/productcontext';

const About = () => {
  const {myName} = useProductContext();
  const data = {
    name: 'Ecommerce Store',
  }
  return (
    <>
    {myName}
    <HeroSection heading={data} />
    </>
    
  )
}

// const Wrapper = styled.section`
//   ${'' /* background-color: ${({theme}) => theme.colors.bg}; */}
//   height: 100vh;
// `;

export default About;