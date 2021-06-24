import React from 'react';
import styled from 'styled-components';
import Campfire from '../../images/pexels-photo-1368382.png';

const Main = styled.div`
    width: 290px;
    height: 395px;
    padding: 20px 20px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    background-image: url(${Campfire})
 `;

const Title = styled.div`
    display: flex;
    justify-content: center;
    color: #f0f9ff;
    font-family: Montez;
    font-size: 38px;
`;

const Body = styled.div`
    padding-top: 15px;
    display: flex;
    justify-content: center;
    color: #f0f9ff;
    font-family: Montserrat;
    font-size: 18px;
    opacity: 0.6;
`;


const CampCard = props => {
    console.log(props)

    return (
        <Main>      
            
            <Title>
                {props.title}
            </Title>

            <Body>
                {props.body}
            </Body>

        </Main>
    )
}

export default CampCard