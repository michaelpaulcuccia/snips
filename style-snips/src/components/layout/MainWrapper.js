import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 10px; 25px;
`;

const MainWrapper = props => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default MainWrapper
