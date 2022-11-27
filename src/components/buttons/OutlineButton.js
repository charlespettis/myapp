import React from 'react';

const OutlineButton = props => {
    const [hover, setHover] = React.useState(false);

    return(
        <button onClick={props.onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{cursor:'pointer',borderTopLeftRadius:3,borderTopRightRadius:3,borderLeft:'none',borderRight:'none',borderTop:'none',borderWidth:2,padding:'7px 20px', backgroundColor:hover ? 'blue' : 'transparent',borderRadius:0,borderColor:'blue',color:hover ? 'white' : 'blue',fontSize:14, ...props.style}}>
            {props.children}
        </button>
    )
}

export default OutlineButton;