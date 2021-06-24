import React from 'react';
import styled from 'styled-components';
import Forest from '../images/pexels-olenka-sergienko-5345029.png'

const MainWrapper = styled.header`
    width: 100%;
    height: 35vh;
    background-image: url(${Forest});
    background-position: right center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 765px) {
        height: 30vh;
    }
`;

const Text = styled.p`
    color: #f0f9ff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    padding-top: 12.5vh;

    animation-name: focus-in-contract;
    animation-duration: 3.2s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;

    @keyframes focus-in-contract {
        0%{
          letter-spacing: 1em;
          filter: blur(12px);
          opacity: 0;
        }
        100%{
          filter: blur(0);
          opacity: 1;
        }
    }

    @media (max-width: 765px) {
        font-size: 28px;
        padding-top: 15vh;
    }
`;

const Header = () => {
    return (
        <MainWrapper>
            <Text>Hello Homeboy</Text>
        </MainWrapper>
    )
}

export default Header
