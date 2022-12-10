import React from 'react';
import styled from 'styled-components';
import { BsPause } from 'react-icons/bs';

const PauseOverlay = () => {
    return(
        <PauseOverlayContainer>
            <BsPause color='white' size={42} />
            <PauseOverlayText>Your recording is currently paused.  Click "Resume Recording" below to pick up where you left off, or click "Stop Recording" to finalize and preview your video.</PauseOverlayText>
        </PauseOverlayContainer>
    )
}

const PauseOverlayContainer = styled.div`
    position:absolute;
    height:100%;
    width:100%;
    background-color: rgba(0,0,0,.75);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const PauseOverlayText = styled.p`
    text-align:center;
    color:white;
    width:80%;
    font-weight:bold;
`

export default PauseOverlay;