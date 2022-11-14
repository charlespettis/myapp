import React from 'react'
import VideoControls from '../components/VideoControls';

const Watch = () => {
    const videoRef = React.useRef();
    const [progress, setProgress] = React.useState(0);

    const handleProgress = e => {
        if (isNaN(e.target.duration)) return;  // duration is NotaNumber at Beginning
        setProgress((e.target.currentTime / e.target.duration) * 100);
    }


    return(
        <main
        style={{display:'flex',height:'100vh',backgroundColor:'black',alignItems:'center',justifyContent:'center'}}
        >
            <video onProgress={handleProgress} ref={videoRef} autoPlay controls={false} style={{height:'93vh'}} src={require('../assets/images/Sample.mp4')}/>
            
             <VideoControls progress={progress} video={videoRef}/>    
            
        </main>
    )

}

export default Watch;