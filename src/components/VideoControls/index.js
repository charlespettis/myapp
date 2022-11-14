import React from 'react';
import Icon from '../common/Icon';
import { useNavigate } from 'react-router-dom';
import VolumeControl from './VolumeControl';
import Thumb from './Thumb';

const VideoControls = props => {

    const video = props.video;
    const navigate = useNavigate();
    const [paused, setPaused] = React.useState(false);
    const [position, setPosition] = React.useState(0);

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

    return(
        <div onClick={play} style={{position:'absolute',height:'100%',width:'100vw',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
            <Icon name='arrow-left-full' onClick={()=>navigate(-1)} size={42} color='white' style={{marginTop:20,marginLeft:20,cursor:'pointer'}}/>
            
            <div style={{height:100,width:'99%',display:'flex',flexDirection:'column',backgroundColor:'rgba(0,0,0,.5)',paddingLeft:20}}>
                <Thumb 
                progress={props.progress}
                />
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:10,}}>
                <Icon name={paused ? 'play' : 'pause'} size={72} color='white' style={{marginLeft:0,cursor:'pointer'}} />
                <Icon name='back-10' color='white' size={46} onClick={e => seek(e,-10)} style={{marginLeft:20,cursor:'pointer'}}/>
                <Icon name='forward-10' color='white' size={46} onClick={e => seek(e,10)} style={{marginLeft:20,cursor:'pointer'}}/>
                <VolumeControl onChange={changeVolume}/>
                </div>
             </div>
        </div>
    )

}

export default VideoControls;