import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 15px 0px;

    @media (max-width: 765px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const CardWrapper = props => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default CardWrapper
