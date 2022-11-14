import React from "react";
import Icon from "./Icon";

const LogOutButton = () => {
    const [hover, setHover] = React.useState(false);

    return(
        <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={()=> setHover(false)}
        style={{marginTop: 'auto',display:'flex',flexDirection:'row',alignItems:'center',marginLeft:20,opacity: hover ? 1 : .7, cursor:'pointer'}}
        >
            <Icon color='white' size={22} name='exit'/>
            <p style={{marginLeft:20,fontSize:16,color:'white'}}>Log Out</p>
        </div>
    )
}

export default LogOutButton;