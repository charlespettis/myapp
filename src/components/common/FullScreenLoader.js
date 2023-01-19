import React from 'react';
import styled from 'styled-components';
import Loader from '../../assets/images/Spin-1s-200px.gif'

const FullScreenLoader = () => {
    return(
        <FullScreenLoaderContainer>
            <img src={Loader} width={100} height={'auto'} />
        </FullScreenLoaderContainer>
    )
}

const FullScreenLoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`

export default FullScreenLoader