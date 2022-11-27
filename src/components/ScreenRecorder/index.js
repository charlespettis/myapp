import React from 'react';
import {BsRecordFill} from 'react-icons/bs';
import {BsFillStopFill} from 'react-icons/bs';
window.Buffer = window.Buffer || require('buffer').Buffer

const ScreenRecorder = props => {
    const [recording, setRecording] = React.useState(false);
    const [recordingPath, setRecordingPath] = React.useState();
    const previewRef = React.useRef();
    const finalRef = React.useRef();

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

        finalRef.current.srcObject = mediaRecorder.stream;

        mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
                chunks.push(e.data);
            }  
        }
        
        mediaRecorder.onstop = async () => {
            const blob = new Blob(chunks, {type: "video/webm"});
            const url = URL.createObjectURL(blob);

            const buffer = Buffer.from(await blob.arrayBuffer())
            
            setRecordingPath(url);
            finalRef.current.srcObject = undefined;
            finalRef.current.src = url;
            chunks = [];

            console.log(mediaRecorder.mimeType);

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
    }
    
    return(
        <>
            <video controls style={{display: finalRef?.current?.src ? 'flex':'none' ,backgroundColor:'black',alignSelf:'center'}} ref={finalRef} height={window.innerHeight / 3} width={window.innerWidth / 3}/>
                
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',alignSelf:'center',width:'100%'}}>
                <video style={{display: recordingPath ? 'none' : 'flex', backgroundColor:'black',alignSelf:'center'}} ref={previewRef} width={'90%'}/>
                <button style={{cursor:'pointer',backgroundColor:'white',border:'none',padding:'5px 50px',maxWidth:300,alignSelf:'center', color:'black',marginTop:30,borderRadius:15,justifyContent:'center',display:'flex',flexDirection:'row',alignItems:'center', boxShadow: recording ? '0 0 10px 2px #de5246' : '0px 0px 10px 2px rgba(0,0,0,.4)'}} onClick={recording ? stopRecording : startRecording}>
                {
                recording ?
                <><BsFillStopFill color='red' size={22}/> Stop Recording </>
                : 
                <><BsRecordFill color='red' size={22} /> Start Recording </>    
                }
            </button>   

            </div>
            
        </>
    )

}

export default ScreenRecorder;