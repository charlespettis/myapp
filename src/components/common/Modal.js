import  React from 'react';

const Modal = props => {

    return(
        <div onClick={()=>props.setVisible(!props.visible)} style={{left:0,top:0,display:props.visible ? 'flex' : 'none',position:'absolute',height:'100%',width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,.3)'}}>
            <div onClick={e => e.stopPropagation()}>
            {props.children}
            </div>
        </div>
    )
}

export default Modal;