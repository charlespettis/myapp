import React from 'react'
import { Link } from 'react-router-dom'

const VideoPreview = (props) => {
    return(
        <Link to="/watch">
        <div style={{marginRight:25,cursor:'pointer'}}>
        <div style={{width:'18em',height:'10em',backgroundColor:'black'}}></div>
        <p>{props.title.slice(0,70)}{ props.title.length >= 70 && '...'}</p>
        </div>
        </Link>
    )
}

export default VideoPreview;
