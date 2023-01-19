import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../app/services/auth';
import { setCredentials } from '../app/reducers/authSlice';
import {useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import Banner from '../components/common/Banner';
import { FormContainer, FormHeaderText, FormInput, FormInputGroup } from '../components/Form';
import SubmitButton from '../components/buttons/SubmitButton';

const Login = () => {

    const [creds, setCreds] = React.useState({
        login: '',
        password: '',
    })

    const [login, {isLoading}] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        if(!creds.login || !creds.password){
            toast('Please enter a username and password.', {type: 'error'});
        }

        try{
            const result = await login(creds)
            if(result.data.success){
                dispatch(setCredentials(Date.now()))
                navigate('/');
            } else {
                toast(result.data.errorMessage || 'Something went wrong! Please try again later.', {type: 'error'})
            }
        } catch(err){
            toast(new Error(err).message, {type: 'error'})
        }
    }


    return(
        <Banner src={require('../assets/images/lp-bg.jpg')} style={{minHeight:'100vh'}}>
        <FormContainer>
            <FormHeaderText>Welcome Back!</FormHeaderText>
            <FormInputGroup>
                    Email or Username
                    <FormInput value={creds.login} onChange={e => setCreds({...creds, login: e.currentTarget.value})}  type={'text'} />
            </FormInputGroup>
            <FormInputGroup>
                    Password
                    <FormInput onChange={e => setCreds({...creds, password: e.currentTarget.value})} type='password'/>
            </FormInputGroup>

            <SubmitButton isLoading={isLoading} style={{width:'100%',marginTop:0,}} onClick={handleLogin}>Continue</SubmitButton>
            <p style={{color:'white',fontSize:12,alignSelf:'flex-start',cursor:'pointer',marginBottom:0}}>Need an account? <Link to='/register' style={{fontWeight:'bold'}}>Register</Link></p>

            </FormContainer>
        </Banner>
    )
}

export default Login;