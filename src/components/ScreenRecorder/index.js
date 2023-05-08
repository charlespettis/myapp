import React from 'react';
import {BsPause, BsPlay, BsRecord, BsStop} from 'react-icons/bs';
import {FiDelete} from 'react-icons/fi';
import styled from 'styled-components';
import InformationBlock from '../InformationBlock';
import PauseOverlay from './PauseOverlay';
import UnsupportedPlatform from './UnsupportedPlatform';

window.Buffer = window.Buffer || require('buffer').Buffer

const ScreenRecorder = props => {
    const [recording, setRecording] = React.useState(false);
    const [recordingPath, setRecordingPath] = React.useState(null);
    const previewRef = React.useRef();
    const finalRef = React.useRef();
    const [recorder,setRecorder] = React.useState(null);
    const [paused, setIsPaused] = React.useState(false);

    const startRecording = async () => {
        let stream = await navigator.mediaDevices.getDisplayMedia({
            video: {
                width: { ideal: 1920, max: 1920 },
                height: { ideal: 1080, max: 1080 }
              }
            ,
            audio: false
        })
    
        let audio = await navigator.mediaDevices.getUserMedia({audio: true, video: false});
    
        setRecording(true);
    
        let chunks = [];
    
        let mime;
    
        if(MediaRecorder.isTypeSupported('video/webm')){
            mime = 'video/webm';
        } else if(MediaRecorder.isTypeSupported('video/mp4')){
            mime = 'video/mp4';
        }
    
        
        let combine = new MediaStream([...stream.getTracks(), ...audio.getTracks()]);
    
        let mediaRecorder = new MediaRecorder(combine, {mimeType: mime});
        setRecorder(mediaRecorder);
    
        finalRef.current.srcObject = mediaRecorder.stream;
    
        mediaRecorder.ondataavailable = (e) => {
            console.log(e);
            if (e.data.size > 0) {
                chunks.push(e.data);
            }  
        }
    
        let timeStamp;
    
        mediaRecorder.onstart = () => {
            timeStamp = Date.now();
        }
        
        mediaRecorder.onstop = async () => {
    
            const blob = new Blob(chunks, {type: mime});
            const url = URL.createObjectURL(blob);
            const buffer = Buffer.from(await blob.arrayBuffer())
            
            setRecordingPath(url);
            finalRef.current.srcObject = undefined;
            finalRef.current.src = url;
            chunks = [];
    
            const duration = (Date.now() - timeStamp) / 1000
    
            props.onChange({
                duration: duration,
                url: buffer,
                contentType: mime
            })
        }
    
        mediaRecorder.start(200);
    
        let preview = previewRef.current;
        preview.srcObject = stream;
        preview.play();
        
    }
    
    const stopRecording = () => {
        let final = finalRef.current;
        final.srcObject.getTracks().forEach(track => track.stop());
        setRecording(false)
        setIsPaused(false);
    }

    const pauseRecording = () => {
        setIsPaused(true);
        recorder.pause();
    }

    const resumeRecording = () => {
        setIsPaused(false)
        recorder.resume();
    }

    const deleteRecording = () => {
        finalRef.current.src = undefined;
        setRecordingPath(null);
        props.onChange(null);
    }
    
    return(
        <>
        {
            MediaRecorder.isTypeSupported("video/webm") || MediaRecorder.isTypeSupported("video/mp4") ? 
            <>
            <FinalVideoPreview shown={recordingPath} controls  ref={finalRef}/>
                
            <ScreenRecorderContainer>

                <ScreenRecorderPreviewStreamContainer shown={!recordingPath} >
                        <ScreenRecorderPreviewStream recording={recording} ref={previewRef}/>


                        { paused && <PauseOverlay /> }

                </ScreenRecorderPreviewStreamContainer>

                <ScreenRecorderButtonGroup>
                    <ScreenRecorderButton disabled={recording || recordingPath} onClick={startRecording}>
                        <BsRecord color='red' size={22} /> Start Recording    
                    </ScreenRecorderButton>

                    {
                    paused ? 
                    <ScreenRecorderButton disabled={!recording} onClick={resumeRecording}>
                        <BsPlay color='red' size={22} /> Resume Recording    
                    </ScreenRecorderButton>
                    :
                    <ScreenRecorderButton disabled={!recording}  onClick={pauseRecording}>
                        <BsPause color='red' size={22} /> Pause Recording
                    </ScreenRecorderButton>
                    }

                    <ScreenRecorderButton disabled={!recording} onClick={stopRecording}>
                        <BsStop color='red' size={22}/> Stop Recording 
                    </ScreenRecorderButton>

                    <ScreenRecorderButton disabled={!recordingPath} onClick={deleteRecording}>
                        <FiDelete color='red' size={22} style={{marginRight:5}}/> Delete Recording 
                    </ScreenRecorderButton>
                </ScreenRecorderButtonGroup>

                <InformationBlock type='warning'>
                    We suggest doing a short test recording to make sure your audio and video settings are set up correctly. We also suggest trying the Google Chrome browser first before contacting support with issues about this screen. 
                </InformationBlock>

            </ScreenRecorderContainer>
            </>
            :
            <UnsupportedPlatform />
        }
        </>
    )

}


const ScreenRecorderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 100%;
    height: 90%;
`

const FinalVideoPreview = styled.video`
    display: ${props => props.shown ? 'flex' : 'none'};
    background-color: black;
    align-self: center;
    width:100%;
`

const ScreenRecorderPreviewStream = styled.video`
    width:100%;
    box-shadow:${props => props.recording ? '0px 0px 10px red' : 'none'};
`

const ScreenRecorderPreviewStreamContainer = styled.div`
    position:relative;
    display: ${props => props.shown ? 'flex' : 'none'};
    background-color:black;
    align-self:center;
    width:100%;
`


const ScreenRecorderButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    gap: 10px;
    margin-bottom:20px;
`

const ScreenRecorderButton = styled.button`
    font-family:'Helvetica';
    cursor:pointer;
    background-color:white;
    border:none;
    box-shadow:0px 0px 5px rgba(0,0,0,.25);
    padding:7px 30px;
    font-size:14px;
    flex:1;
    align-self:center;
    color:black;
    margin-top:30px;
    border-radius:5px;
    justify-content:center;
    display:flex;
    flex-direction:row;
    align-items:center;
    opacity: ${props => props.disabled ? .5 : 1};
    pointer-events: ${props => props.disabled ? 'none' : 'all'};
`



export default ScreenRecorder;