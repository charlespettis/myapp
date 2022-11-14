import React from 'react'

const Thumb = props => {

    
    return(
        <div onMouseDown={e=>{console.log(e)}} style={{height:2,width:'100%',backgroundColor:'transparent',display:'flex',alignItems:'center',cursor:'pointer',paddingTop:5,paddingBottom:5,}}>
            <div  style={{width:`100%`,height:'100%',backgroundColor:'gray',display:'flex',flexDirection:'row',alignItems:'center'}}>
                <div style={{width:`${props.progress}%`,height:'100%',backgroundColor:'red'}} />
                <div style={{height:10,width:10,backgroundColor:'red',borderRadius:100}}/>
            </div>
        </div>

    )
}

export default Thumb;