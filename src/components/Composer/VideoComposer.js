import React from 'react';
import ScreenRecorder from '../ScreenRecorder';
import DropZone from '../DropZone';
import styled from 'styled-components';
import ButtonGroup from '../buttons/ButtonGroup';
import Alert from '../Alert';

const VideoComposer = props => {
    const [type,setType] = React.useState('record');
    const alert = React.useContext(Alert)
    const toggleUpload = () => {
            alert({
                title: 'Warning', 
                message: 'You will lose any unsaved progress on your recording by switching to this mode.',
                buttons: [
                    {
                        label: 'Cancel',
                        type: 'cancel',
                        onClick: () => {}
                    },
                    {
                        label: 'Continue',
                        type: 'confirm',
                        onClick: () => {
                            props.onChange(null);
                            setType('upload');
                        }
                    },
    
                ]
            })
    } 

    return(
        <VideoComposerContainer>
            <ButtonGroup style={{marginBottom:20}}>
                <VideoComposerButton onClick={()=>setType('record')} focused={type === 'record'}>Record</VideoComposerButton> 
                <VideoComposerButton onClick={toggleUpload} focused={type === 'upload'}>Upload from Desktop</VideoComposerButton>
            </ButtonGroup>
            
            {
            type === 'record' ?
            <ScreenRecorder onChange={props.onChange} />
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
    margin-bottom: 3em;
`

export default VideoComposer;