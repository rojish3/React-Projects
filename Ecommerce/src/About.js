import React from 'react'
import styled from 'styled-components';

const About = () => {
  return (
    <Wrapper>
      <div>About</div>
    </Wrapper>
    
  )
}

const Wrapper = styled.section`
  ${'' /* background-color: ${({theme}) => theme.colors.bg}; */}
  height: 100vh;
`;

export default About;