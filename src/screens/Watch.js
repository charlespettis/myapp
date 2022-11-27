import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetVideoQuery } from '../app/services/auth';
import VideoControls from '../components/VideoControls';

const Watch = () => {
    const videoRef = React.useRef();
    const [progress, setProgress] = React.useState(0);
    const {id} = useParams();
    const {data, isLoading} = useGetVideoQuery(id);

    const handleProgress = e => {
        if (isNaN(e.target.duration)) return;  // duration is NotaNumber at Beginning
        setProgress((e.target.currentTime / e.target.duration) * 100);
    }


    return(
        <main
        style={{display:'flex',height:'100vh',backgroundColor:'black',alignItems:'center',justifyContent:'center'}}
        >
            <video onProgress={handleProgress} ref={videoRef} autoPlay controls={false} style={{height:'93vh'}} src={data?.url}/>
            
             <VideoControls progress={progress} video={videoRef}/>    
            
        </main>
    )

}

export default Watch;