import React from 'react';
import styled from 'styled-components';
import Icon from './common/Icon';

const Alert = React.createContext();

export const AlertProvider = props => {
    const [alert, setAlert] = React.useState(null);

    const handleClick = cb => {
        cb();
        setAlert(null);
    }

    const renderButtons = () => {
        return alert?.buttons?.map(e => {
            switch(e.type){
                case "confirm":
                    return(
                        <ConfirmButton onClick={() => handleClick(e.onClick)}>{e.label}</ConfirmButton>
                    )
                case "cancel":
                    return(
                        <CancelButton onClick={() => handleClick(e.onClick)}>{e.label}</CancelButton>
                    )
                case "delete":
                    return(
                        <DeleteButton onClick={() => handleClick(e.onClick)}>{e.label}</DeleteButton>
                    )
            }
        })
    }

    return(
        <Alert.Provider value={ setAlert}>
            {props.children}
            {
                alert &&
                <div style={{position:'absolute',top:0,left:0,width:'100vw',height:'100vh',zIndex:99,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,.25)'}}>
                    <div style={{minWidth:'30%',backgroundColor:'white',boxShadow:'0px 0px 2px rgba(0,0,0,.5)',display:'flex',flexDirection:'column'}}>
                        <div style={{paddingLeft:10,width:'100%',backgroundColor:'#f7f7f7',padding:'5px 15px',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',boxSizing:'border-box'}}>
                            <p>{alert?.title}</p>
                            <Icon onClick={()=>setAlert(null)} name='close' size={16}/>
                        </div>
                        <p style={{padding:10}}>
                            {alert?.message}
                        </p>
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center',alignSelf:'flex-end',padding:10}}>
                            {
                            renderButtons()
                            }    
                            
                        </div>
                    </div>

                </div>
            }
            

        </Alert.Provider>
    )
}


const ConfirmButton = styled.button`
    padding:5px 15px;
    color:white;
    background-color: blue;
    border:none;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`

const CancelButton = styled.button`
    padding:5px 15px;
    color:black;
    background-color: transparent;
    border:none;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;

`

const DeleteButton = styled.button`
    padding:5px 15px;
    color:white;
    background-color: red;
    display:flex;
    border:none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`

export default Alert; 


