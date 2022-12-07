import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetVideoQuery } from '../app/services/auth';
import VideoControls from '../components/VideoControls';

const Watch = () => {
    const videoRef = React.useRef();
    const [progress, setProgress] = React.useState(0);
    const {id} = useParams();
    const {data, isLoading, isError} = useGetVideoQuery(id);
    const [duration, setDuration] = React.useState(0);
    const [currentTime, setCurrentTime] = React.useState(0);
    console.log(data);
    const handleProgress = e => {
        //if (isNaN(e.target.duration)) return;  // duration is NotaNumber at Beginning
        console.log(e);
        setCurrentTime(e.target.currentTime);
        setProgress((e.target.currentTime / data?.duration) * 100);
    }
    const [timestamp, setTimestamp] = React.useState(Date.now());

    // setInterval(()=>{
    //     setTimestamp( prevState => {
    //          Date.now() - 5000 > timestamp 
    //     })
    // },5000)
    let timeout;
    const handleMouseMove = () => {
        clearTimeout(timeout);
        setTimestamp(Date.now());
        timeout = setTimeout(()=>{
            setTimestamp(prevState => {
                if(prevState + 3000 < Date.now()){
                    return null
                }
                return prevState;
            })
        },3000)
    }

    return(
        <main
        onMouseMove={handleMouseMove}
        style={{display:'flex',height:'100vh',backgroundColor:'black',alignItems:'center',justifyContent:'center'}}
        >
            <video onDurationChange={e => setDuration(e.target.duration)} onTimeUpdate={handleProgress}  ref={videoRef} autoPlay controls={false} style={{height:'93vh'}} src={data?.url}/>
            {
                (timestamp && videoRef.current) &&
             <VideoControls duration={data?.duration} currentTime={currentTime} progress={progress} video={videoRef}/>   
            } 

            {
                isError && 
                    <div style={{position:'absolute',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh',width:'100vw',zIndex:99}}><p style={{color:'white'}}>Something went wrong loading this video</p></div>
                
            }
            
        </main>
    )

}

export default Watch;