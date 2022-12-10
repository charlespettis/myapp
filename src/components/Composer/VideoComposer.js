import React from 'react';
import ScreenRecorder from '../ScreenRecorder';
import DropZone from '../DropZone';
import styled from 'styled-components';
import ButtonGroup from '../buttons/ButtonGroup';

const VideoComposer = props => {
    const [type,setType] = React.useState('record');

    const toggleUpload = () => {
        if(props.url){
            alert('you are about to delete your video lol')
        }
        setType('upload')
    }

    return(
        <VideoComposerContainer>
            <ButtonGroup style={{marginBottom:20}}>
                <VideoComposerButton onClick={()=>setType('record')} focused={type === 'record'}>Record</VideoComposerButton> 
                <VideoComposerButton onClick={toggleUpload} focused={type === 'upload'}>Upload from Desktop</VideoComposerButton>
            </ButtonGroup>
            
            {
            type === 'record' ?
            <ScreenRecorder onChangeDuration={props.onChangeDuration} onChange={props.onChange} />
            :
            <DropZone  onChange={props.onChange} />
            }
            
        </VideoComposerContainer>
    )
}

const VideoComposerButton = styled.button`
    font-size: 20px;
    color: ${props => props.focused ? 'black' : 'rgba(0,0,0,.6)'};
    background-color: transparent;
    border:none;
`

const VideoComposerContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
`

export default VideoComposer;