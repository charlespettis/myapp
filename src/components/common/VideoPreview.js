import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon';

const VideoPreview = (props) => {
    return(
        <div onClick={props.onClick} style={{cursor:'pointer'}}>
        <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column',width:'18em',height:'10em',background: props.thumbnail ? props.thumbnail : 'black'}}>
        <Icon name={props.icon} size={42} style={{filter:'drop-shadow(0px 0px 5px rgba(0,0,0,1)',color:'white',margin:10}}/>
        <p style={{cursor:'default',textShadow:'0px 0px 5px rgba(0,0,0,1)',alignSelf:'flex-end',marginTop:'auto',marginBottom:10,marginRight:10,color:'white',fontWeight:'800',fontFamily:'Helvetica',fontSize:18}}>{props.type}</p>

        </div>
        <p>{props?.title?.slice(0,70)}{ props?.title?.length >= 70 && '...'}</p>
        </div>
    )
}

export default VideoPreview;
