import React from 'react';
import styled from 'styled-components';

const Banner = props => {
    return(
        <div style={{backgroundRepeat:'no-repeat',backgroundColor:'white',backgroundSize:'cover',backgroundImage: `url(${props.src})`,minHeight:250,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',...props.style}}>
            {props.children}
        </div>
    )
}

const BottomLeftHeader = styled.h1`
    font-family:'Gruppo';
    font-size:64px;
    align-self:flex-start;
    margin-top:auto;
    margin-left:20px;
    color:rgba(255,255,255,.9);
    text-shadow:0px 0px 10px rgba(0,0,0,.25);
    margin-bottom:20px;
    padding-bottom:0px;
`



Banner.BottomLeftHeader = BottomLeftHeader;
export default Banner;