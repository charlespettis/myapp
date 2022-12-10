import React from "react";
import Icon from "./Icon";
import { useLogoutMutation } from "../../app/services/auth";
import { setCredentials } from "../../app/reducers/authSlice";
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
    const [hover, setHover] = React.useState(false);
    const [logout, {isLoading}] = useLogoutMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {        
        const result = await logout();
        dispatch(setCredentials({payload:null}));
        navigate('/')
    }

    return(
        <div
        onClick={handleLogout}
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