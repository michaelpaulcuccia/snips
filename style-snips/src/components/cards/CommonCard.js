import React from 'react';
import styled from 'styled-components';
import Campfire from '../../images/pexels-photo-1368382.png';
import Coffee from '../../images/pexels-taryn-elliott-4909166.jpg';
import Tents from '../../images/pexels-dương-nhân-1328876.jpg';

const Main = styled.div`
    margin-top: 10px;
    width: 290px;
    height: 395px;
    padding: 20px 20px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    background-image: url(${props =>
        {
            if (props.image === 'campfire'){
                return Campfire
            } else if (props.image === 'coffee'){
                return Coffee
            } else {
                return Tents
            }
        }
    }) 

`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    font-family: Montez;
    font-size: 38px;
    color: ${props => 
        {
            if (props.titleColor === 'dark'){
                return "#282d32"
            } else {
                return "#f0f9ff"
            }
        }
    } 
`;

const Body = styled.div`
    padding-top: 15px;
    display: flex;
    justify-content: center;
    font-family: Montserrat;
    font-size: 18px;  
    color: ${props => 
        {
            if (props.bodyColor === 'dark'){
                return "#000000"
            } else {
                return "#f0f9ff"
            }
        }
    }     
`;


const CommonCard = props => {
    console.log(props)

    return (
        <Main image={props.image}>        
            
            <Title titleColor={props.titleColor}>
                {props.title}
            </Title>

            <Body bodyColor={props.bodyColor}>
                {props.body}
            </Body>

        </Main>
    )
}

export default CommonCard