import React from 'react'

const Thumb = props => {

    
    return(
        <div onMouseLeave={props.onMouseLeave} onMouseMove={props.onMouseOver} onClick={props.onClick} style={{height:4,width:'100%',backgroundColor:'transparent',display:'flex',alignItems:'center',cursor:'pointer',paddingTop:5,paddingBottom:5,}}>
            <div  style={{width:`100%`,height:'100%',backgroundColor:'gray',display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div style={{width:`${props.progress}%`,height:'100%',backgroundColor:'red', pointerEvents:'none'}} />
                <div style={{height:10,width:10,backgroundColor:'red',borderRadius:100,pointerEvents:'none'}}/>
            </div>
        </div>

    )
}

export default Thumb;