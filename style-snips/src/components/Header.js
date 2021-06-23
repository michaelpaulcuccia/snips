import React from 'react';
import styled from 'styled-components';
import Forest from '../images/pexels-olenka-sergienko-5345029.png'

const MainWrapper = styled.header`
    width: 100%;
    height: 35vh;
    background-image: url(${Forest});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Text = styled.p`
    color: #f0f9ff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    padding-top: 12.5vh;
`;

const Header = () => {
    return (
        <MainWrapper>
            <Text>Hello Homeboy</Text>
        </MainWrapper>
    )
}

export default Header
