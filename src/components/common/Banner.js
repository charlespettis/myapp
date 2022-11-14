import React from 'react';

const Banner = props => {
    return(
        <div style={{backgroundRepeat:'no-repeat',borderRadius:15,backgroundColor:'white',backgroundSize:'cover',backgroundImage: `url(${props.src})`,width:'100%',height:400}}>
            {props.children}
        </div>
    )
}

export default Banner;