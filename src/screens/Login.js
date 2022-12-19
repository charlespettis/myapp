import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../app/services/auth';
import { setCredentials } from '../app/reducers/authSlice';
import {useDispatch} from 'react-redux';
import {toast} from 'react-toastify';

const Login = () => {

    const [creds, setCreds] = React.useState({
        login: '',
        password: '',
    })

    const [login, {isLoading}] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try{
            const result = await login(creds)
            if(result.data.success){
                dispatch(setCredentials({payload: true}))
                navigate('/');
            }
        } catch(err){
            toast('Something went wrong! Please try again later.', {type: 'error'})
            console.log(err);
        }
    }


    return(
        <>
        <p>Login</p>
        <input onChange={e => setCreds({...creds, login: e.currentTarget.value})} type='email' placeholder='Email or Username'/>
        <input onChange={e => setCreds({...creds, password: e.currentTarget.value})} type='password' placeholder='Password'/>
        <button onClick={handleLogin}>GO</button>
        </>
    )
}

export default Login;