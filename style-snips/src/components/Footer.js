import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Wrapper = styled.footer`
    width: 100%;
    height: 250px;
    background-color: #282d32;
    color: #f0f9ff;

    @media (max-width: 765px){
        height: 175px;
    }
`;

const ItemsWrapper = styled.div`
    padding: 30px 45px;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 700px) {
        padding: 10px 15px 20px 15px;
    }
`;

const ListCol = styled.div`
    display: flex;
    flex-direction: column;
    
    h2 {
        margin-bottom: 15px;

        @media (max-width: 765px){
            margin-bottom: 5px;
            font-size: 14px;
        }
    }

    p {
        line-height: 1.4;
        font-size: 14px;
        
        @media (max-width: 765px){
            line-height: 1.1;
            font-size: 10px;
        }
    }

`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;

    .icon {
        padding: 0px 12.5px;

        @media (max-width: 765px){
            padding: 0px 7.5px;
        }
        
        svg {
            height: 32px;
            width: 32px;

            @media (max-width: 765px){
                height: 24px;
                width: 24px;
            }
        }
    }

`;

const CopyWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 15px;
    font-size: 12px;

    @media (max-width: 765px) {
        padding-top: 8px;
        font-size: 10px;
    }
`;


const Footer = () => {
    return (
        <Wrapper>

            <ItemsWrapper>

                <ListCol>
                    <h2>Services</h2>
                    <p>User Interface (UI)</p>
                    <p>Web Development</p>
                </ListCol>

                <ListCol>
                    <h2>About</h2>
                    <p>Company</p>
                    <p>Team</p>
                    <p>Careers</p>
                </ListCol>

            
            </ItemsWrapper>

            <IconWrapper>

                <span className='icon'><FaGithub /></span>
                <span className='icon'><FaInstagram /></span>
                <span className='icon'><FaYoutube /></span>                          
                
            </IconWrapper>

            <CopyWrapper>

                <p>Hello Homeboy © 2021</p>   

            </CopyWrapper>
                        
        </Wrapper>
    )
}

export default Footer
