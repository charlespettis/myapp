import React from 'react';
import Icon from '../common/Icon';
import { useNavigate } from 'react-router-dom';
import VolumeControl from './VolumeControl';
import Thumb from './Thumb';

const VideoControls = props => {

    const video = props.video;
    const navigate = useNavigate();
    const [paused, setPaused] = React.useState(false);
    const [hover, setHover] = React.useState();
    const [timeStamp, setTimeStamp] = React.useState();

    const play = () => {
        if(video.current.paused) {
            video.current.play()
            setPaused(false);
        } else {
            video.current.pause();
            setPaused(true)
        }
    }

    const seek = (e,time) => {
        e.stopPropagation();
        video.current.currentTime = video.current.currentTime + time
    }

    const changeVolume = val => {
        video.current.volume = val;
    }

    const handleClick = e =>{
        props.setLoading(true);
        const targetTime = (e.clientX / e.target.clientWidth) * props.duration
        video.current.currentTime = targetTime;
    }

    const handleMouseOver = e => {
        const positionInSeconds = Math.floor((e.clientX / e.target.clientWidth) * props.duration);
        var minutes = Math.floor(positionInSeconds / 60);
        var seconds = positionInSeconds - minutes * 60;
        setTimeStamp(`${minutes}:${seconds}`);
        setHover(e.clientX)
    }

    return(
        <div onDoubleClick={()=>props.onRequestFullscreen()} onClick={play} style={{position:'absolute',height:'100%',width:'100vw',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <Icon name='arrow-left-full' onClick={()=>navigate(-1)} size={42} color='white' style={{marginTop:20,marginLeft:20,cursor:'pointer'}}/>
            
            <div onClick={e=>{e.stopPropagation()}} style={{height:100,width:'100%',display:'flex',flexDirection:'column',backgroundColor:'rgba(0,0,0,.75)'}}>
                {hover &&<p style={{position:'absolute',backgroundColor:'white',padding:'5px 10px',left:hover,top: window.innerHeight -150, boxShadow:'0px 0px 5px rgba(0,0,0,.5)'}}>{timeStamp}</p>}
                <Thumb 
                onMouseOver={handleMouseOver}
                onMouseLeave={() => setHover(false)}
                onClick={handleClick}
                progress={props.progress}
                />
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingLeft:10,paddingRight:20}}>

                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',marginTop:10,flex:1}}>

                    <Icon name={video.current.paused ? 'play' : 'pause'} size={72} color='white' style={{marginLeft:0,cursor:'pointer'}} />
                    <Icon name='back-10' color='white' size={46} onClick={e => seek(e,-10)} style={{marginLeft:20,cursor:'pointer'}}/>
                    <Icon name='forward-10' color='white' size={46} onClick={e => seek(e,10)} style={{marginLeft:20,cursor:'pointer'}}/>
                    <VolumeControl  onChange={changeVolume}/>
                    </div>

                    <div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>

                    <p style={{color:'white',textAlign:'center',alignSelf:'center'}}>{props.title}</p>
                    </div>


                    <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row',alignItems:'center',marginTop:10,flex:1}}>
                    <p style={{color:'whitesmoke',fontSize:16}}>{`${Math.floor(video.current.currentTime / 60)}:${Math.floor(video.current.currentTime - Math.floor(video.current.currentTime / 60) * 60)}`} / {`${Math.floor(props.duration / 60)}:${Math.floor(props.duration - Math.floor(props.duration / 60) * 60)}`}</p>
                    <Icon onClick={()=>props.onRequestFullscreen()} name='expand' style={{marginLeft:20, cursor: 'pointer'}} size={32} color='white' />
                    </div>

                </div>
             </div>

        </div>
    )

}

export default VideoControls;