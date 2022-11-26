import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../app/services/auth';
import {toast} from 'react-toastify';

const Register = () => {
    const [creds, setCreds] = React.useState({
        username: '',
        email: "",
        password: '',
    })

    const [register, {isLoading}] = useRegisterMutation();
    const navigate = useNavigate();

    const handleRegister = async () => {
        try{
            const result = await register(creds)
            if(result.data.success){
                toast('Successfully registered!', {type:'success'});
                navigate('/login');
            }
        } catch(err){
            console.log(err);
        }
    }


    return(
        <>
        <p>Register</p>
        <input value={creds.username} onChange={e => setCreds({...creds, username: e.currentTarget.value})}  type={'text'} placeholder='username'/>
        <input value={creds.email} onChange={e => setCreds({...creds, email: e.currentTarget.value})} type={'email'} placeholder='email'/>
        <input value={creds.password} onChange={e => setCreds({...creds, password: e.currentTarget.value})} type={'password'} placeholder='password'/>
        <button onClick={handleRegister}>Go</button>
        </>
    )
}

export default Register;