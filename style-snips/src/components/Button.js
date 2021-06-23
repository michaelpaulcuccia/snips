import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    display:inline-block;
    padding:0.5em 1.3em;
    border: none;
    border-radius:0.2em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:400;
    color:#FFFFFF;
    box-shadow:inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em 
        rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
    text-align:center;
    background-color: ${props => 
        {
            if (props.variant === 'secondary'){
                return "#32CD32"
            } else if (props.variant === 'tertiary'){
                return "#8FBC8F"
            } else {
                return "#72bcd4"
            }
        }
    }
`;

function Button(props) {

    return (
        <Wrapper variant={props.variant}>
             {props.children}
        </Wrapper>
    )
}

export default Button
