import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px; 25px;
    min-width: 720px;
    width: 1600px;

    @media (max-width: 720px) {
        width: 720px;
    }
`;

const layout = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default layout
