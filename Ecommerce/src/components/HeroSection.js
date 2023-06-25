import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const HeroSection = ({ heading }) => {
    const {name} = heading;
  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>Welcome to</p>
                    <h1>{name}</h1>
                    <p>
                    Discover the latest cutting-edge electronics at unbeatable prices. 
                    Shop a wide range of gadgets, smartphones, laptops, and accessories 
                    for a seamless tech experience. 
                    Fast shipping and exceptional customer support.
                    </p>
                    <NavLink>
                        <Button>Shop Now</Button>
                    </NavLink>
                </div>
                <div className='hero-section-image'>
                    <figure>
                    <img className="img-style" src="./images/hero.jpg" alt="hero-section" />
                    </figure>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`   
    padding: 12rem 5rem;

    img {
        min-weight: 10rem;
        height: 10rem;
    }

    .hero-section-data {
        p {
            margin: 2rem 0;
        }
        h1 {
            text-transform: capitalize;
            font-weight: bold;
        }
        .intro-data {
            margin-bottom: 0;
        }
    }

    .hero-section-image {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    figure {
        position: relative;

        &::after {
            content: "";
            width: 60%;
            height: 80%;
            background-color: rgba(81, 56, 238, 0.4);
            position: absolute;
            left: 50%;
            top: -5rem;
            z-index: -1;
        }
    }
    .img-style {
        width: 100%;
        height: auto;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
            gap: 10rem;
        }
        figure::after {
            content: " ";
            width: 50%;
            height: 100%;
            left: 0;
            top: 10%;
            background-color: rgba(81, 56, 238, 0.4);
        }
    }

`;

export default HeroSection