import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetVideoQuery } from '../app/services/auth';
import ContentLock from '../components/common/ContentLock';
import VideoControls from '../components/VideoControls';

const Watch = () => {
    const videoRef = React.useRef();
    const [progress, setProgress] = React.useState(0);
    const {id} = useParams();
    const {data, isLoading, isError} = useGetVideoQuery(id);
    const [loading, setLoading] = React.useState(true);
    const mainRef = React.useRef();

    const handleProgress = e => {
        if (isNaN(e.target.duration)) return;  // duration is NotaNumber at Beginning
        setProgress((e.target.currentTime / data?.duration) * 100);
    }
    const [timestamp, setTimestamp] = React.useState(Date.now());

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

    React.useEffect(()=>{
        const handlePause = e => {
            if(e.code === 'Space'){
                if(videoRef.current.paused){
                    videoRef.current.play()
                } else {
                    videoRef.current.pause()
                }
            }
        } 
        window.addEventListener('keydown',handlePause)

        return () => window.removeEventListener('keydown', handlePause)
    },[])

    if(isError) return <div style={{height:'100vh',width:'100vw'}}> <ContentLock /></div>

    return(
        <main
        ref={mainRef}
        onMouseMove={handleMouseMove}
        style={{display:'flex',height:'100vh',backgroundColor:'black',alignItems:'center',justifyContent:'center'}}
        >
            <video onPlaying={() => setLoading(false)} onSeeked={()=>setLoading(false)} onTimeUpdate={handleProgress} ref={videoRef} autoPlay controls={false} style={{height:'93vh'}} src={data?.url}/>
            {loading && 
            <div style={{position:'absolute',width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,.5)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <img style={{maxWidth:50}} src={require('../assets/images/loading.gif')}/>
            </div>
            }

            {
            (timestamp && videoRef.current) &&
             <VideoControls onRequestFullscreen={() => document.fullscreenElement? document.exitFullscreen() : mainRef.current.requestFullscreen()} setLoading={setLoading} duration={data?.duration} progress={progress} video={videoRef}/>   
            } 

            
        </main>
    )

}

export default Watch;