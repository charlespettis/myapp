import React from "react";
import Icon from "../common/Icon";

const UnsupportedPlatform = () => {
    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:20}}>
            <Icon size={47} name='warning'/>
            <p style={{fontSize:26,marginTop:10,marginBottom:0}}>Sorry!</p>
            <p style={{textAlign:'center',width:'60%'}}>We currently do not support recording videos on your browser.  Please either upload a video file by clicking "Upload from Computer", or use the Chrome web browser. </p>
        </div>
    )
}

export default UnsupportedPlatform;