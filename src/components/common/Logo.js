import React from 'react';

const Logo = props => {
    const COLOR_TYPES = {
      'dark': 'white',
      'light': 'blue'
    }

    return(
      <p style={{alignSelf:'center',textAlign:'center',fontSize:props.size || 22,pointerEvents:'none',margin:0,...props.style}}>
        <span style={{color:'orange'}}>
          Skill
        </span>
  
        <span style={{color: COLOR_TYPES[props.type] ?? 'white' }}>
        Center
        </span>
      </p>
    )
}

export default Logo;