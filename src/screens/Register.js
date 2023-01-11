import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../app/services/auth';
import {toast} from 'react-toastify';
import Banner from '../components/common/Banner';
import SubmitButton from '../components/buttons/SubmitButton';
import { FormContainer, FormHeaderText, FormInputGroup, FormInput } from '../components/Form';
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
        <Banner src={require('../assets/images/lp-bg.jpg')} style={{minHeight:'100vh'}}>
        <FormContainer>
            <FormHeaderText>Create an Account</FormHeaderText>
            <FormInputGroup>
                Username
                <FormInput value={creds.username} onChange={e => setCreds({...creds, username: e.currentTarget.value})}  type={'text'} />
            </FormInputGroup>
            <FormInputGroup>
                Email
                <FormInput value={creds.email} onChange={e => setCreds({...creds, email: e.currentTarget.value})} type={'email'} />
            </FormInputGroup>
            <FormInputGroup>
                Password
                <FormInput value={creds.password} onChange={e => setCreds({...creds, password: e.currentTarget.value})} type={'password'}/>
            </FormInputGroup>

            <SubmitButton style={{width:'100%',marginTop:0,}} onClick={handleRegister}>Continue</SubmitButton>
        </FormContainer>
        </Banner>
    )
}

export default Register;