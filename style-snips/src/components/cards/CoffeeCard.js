import React from 'react';
import styled from 'styled-components';
import Coffee from '../../images/pexels-taryn-elliott-4909166.jpg';

const Main = styled.div`
    width: 290px;
    height: 395px;
    padding: 20px 20px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    background-image: url(${Coffee})
 `;

const Title = styled.div`
    display: flex;
    justify-content: center;
    color: black;
    font-family: Montez;
    font-size: 38px;
`;

const Body = styled.div`
    padding-top: 15px;
    display: flex;
    justify-content: center;
    color: black;
    font-family: Montserrat;
    font-size: 18px;
    //opacity: 0.6;
`;


const CoffeeCard = props => {
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

export default CoffeeCard