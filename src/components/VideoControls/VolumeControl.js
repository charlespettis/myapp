import React from 'react';
import Icon from '../common/Icon';

const VolumeControl = props => {
    const [hover, setHover] = React.useState(false);
    const [volume, setVolume] = React.useState(5);
    const [position, setPosition] = React.useState(0);


    const handleMute = e => {
        if(volume > 0) {
            setVolume(0)
            props.onChange(0);
        } else {
            setVolume(.5);
            props.onChange(.5);
        }
    }

    const changeVolume = e => {
        setVolume(e.currentTarget.value)
        props.onChange(e.currentTarget.value)
    }


    return(
        <div onClick={e => e.stopPropagation()} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{display:'flex',flexDirection:'row',alignItems:'center',marginLeft:20,height:'100%',justifyContent:'center'}}>
            <Icon name={
                volume < .1 ?
                'volume-mute' :
                volume < .4 ?
                'volume-low' :
                volume < .7 ? 
                'volume' :
                'volume-high'
            } color='white' size={46} style={{cursor:'pointer'}}
            onClick={handleMute}
            />
            {hover && 
            <input step={.1} min={0} max={1} value={volume}  onChange={changeVolume} type={'range'} style={{marginRight:30}}/>
            }
        </div>
    )
}

export default VolumeControl;