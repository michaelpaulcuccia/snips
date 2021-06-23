import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Wrapper = styled.footer`
    width: 100%;
    height: 20vh;
    background-color: #282d32;;
    color: #f0f9ff;
`;

const ItemsWrapper = styled.div`
    padding: 30px 45px;
    display: flex;
    justify-content: flex-start;
`;

const Services = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 25px 0px 0px;

    h2 {
        margin-bottom: 15px;
    }

    p {
        line-height: 1.4;
        font-size: 14px;
    }
`;

const About = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 0px 0px 25px;

    h2 {
        margin-bottom: 15px;
    }

    p {
        line-height: 1.4;
        font-size: 14px;
    }

`;

const Company = styled.div`
   margin-left: 60px;

`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;

    .icon {
        padding: 0px 12.5px;
        
        svg {
            height: 32px;
            width: 32px;
        }
    }

`;

const CopyWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 15px;
    font-size: 12px;
`;


const Footer = () => {
    return (
        <Wrapper>

            <ItemsWrapper>

                <Services>
                    <h2>Services</h2>
                    <p>User Interface (UI)</p>
                    <p>Web Development</p>
                </Services>

                <About>
                    <h2>About</h2>
                    <p>Company</p>
                    <p>Team</p>
                    <p>Careers</p>
                </About>

                <Company>
                    <h2>Company</h2>
                    <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                </Company>

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
