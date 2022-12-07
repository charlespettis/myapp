import React from 'react';
import {BsPause, BsPauseFill, BsPlay, BsRecord, BsRecordFill, BsStop, BsTrash} from 'react-icons/bs';
import {BsFillStopFill} from 'react-icons/bs';
import {FiDelete} from 'react-icons/fi';

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
                width: { ideal: 4096 },
                height: { ideal: 2160 } 
            },            
            audio: true
        })

        let audio = await navigator.mediaDevices.getUserMedia({audio: true, video: false});

        setRecording(true);

        let chunks = [];

        const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9") ? "video/webm; codecs=vp9" : "video/webm";
        
        let combine = new MediaStream([...stream.getTracks(), ...audio.getTracks()]);


        let mediaRecorder = new MediaRecorder(combine, {mimeType:mime});
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

            const blob = new Blob(chunks, {type: "video/webm"});
            const url = URL.createObjectURL(blob);
            console.log(timeStamp);
            const buffer = Buffer.from(await blob.arrayBuffer())
            
            setRecordingPath(url);
            finalRef.current.srcObject = undefined;
            finalRef.current.src = url;
            chunks = [];

            const duration = (Date.now() - timeStamp) / 1000
            props.onChangeDuration(duration)

            props.onChange(buffer);
        }

        mediaRecorder.start(200);


        let preview = previewRef.current;
        preview.srcObject = stream;
        preview.play();
        
    }

    const stopRecording = () => {
        let final = finalRef.current;

        final.srcObject.getTracks().forEach(track => track.stop());
        console.log(final.src)
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
            {//smaller player
            }
            <video controls style={{display: recordingPath ? 'flex':'none' ,backgroundColor:'black',alignSelf:'center'}} ref={finalRef} width={'100%'}/>
                
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',alignSelf:'center',width:'100%'}}>
                
                <div style={{position:'relative',display: recordingPath ? 'none' : 'flex', backgroundColor:'black',alignSelf:'center',width:'90%'}}>
                <video style={{boxShadow: recording ? '0px 0px 10px red' : 'none'}} ref={previewRef} width={'100%'}/>
                
                {
                    paused && 
                    <div style={{position:'absolute',height:'100%',width:'100%',backgroundColor:'rgba(0,0,0,.75)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <BsPause color='white' size={42} />
                        <p style={{textAlign:'center',color:'white',width:'80%',fontWeight:'bold'}}>Your recording is currently paused.  Click "Resume Recording" below to pick up where you left off, or click "Stop Recording" to finalize and preview your video.</p>
                    </div>
                }
                </div>

                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>

                <Button style={(recording || recordingPath)&& {opacity:.65,pointerEvents:'none'}} onClick={startRecording}>
                <><BsRecord color='red' size={22} /> Start Recording </>    
                </Button>

                {
                    paused ? 

                <Button style={!recording && {opacity:.65,pointerEvents:'none'}} onClick={resumeRecording}>
                <><BsPlay color='red' size={22} /> Resume Recording </>    
                </Button>
                :
                <Button style={!recording && {opacity:.65,pointerEvents:'none'}} onClick={pauseRecording}>
                <><BsPause color='red' size={22} />Pause Recording </>    
                </Button>

                }
                <Button style={!recording && {opacity:.65,pointerEvents:'none'}} onClick={stopRecording}>
                <><BsStop color='red' size={22}/> Stop Recording </>
                </Button>

                <Button onClick={deleteRecording} style={!recordingPath && {opacity:.65,pointerEvents:'none'}}>
                <><FiDelete color='red' size={16} style={{marginRight:5}}/> Delete Recording </>
                </Button>




                </div>




            </div>
            
        </>
    )

}

const Button = props => {
    return(
        <button onClick={props.onClick} style={{cursor:'pointer',backgroundColor:'white',border:'none',padding:'7px 20px 7px 7px',fontSize:14,maxWidth:300,alignSelf:'center', color:'black',marginTop:30,borderRadius:10,justifyContent:'center',display:'flex',flexDirection:'row',alignItems:'center', ...props.style}} >
            {props.children}
        </button>
    )
}

export default ScreenRecorder;