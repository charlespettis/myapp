import React from 'react';

const Banner = props => {
    return(
        <div style={{backgroundRepeat:'no-repeat',backgroundColor:'white',backgroundSize:'cover',backgroundImage: `url(${props.src})`,width:'100%',minHeight:500,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            {props.children}
        </div>
    )
}

export default Banner;