import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

    const REGEX_EMAIL_VALIDATOR = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const REGEX_PASSWORD_VALIDATOR = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    const handleRegister = async () => {
        if(!creds.username){
            toast('Please enter a username.', {type: 'error'});
            return;
        }
        if(!REGEX_EMAIL_VALIDATOR.test(creds.email)){
            toast('Please enter a valid email.', {type: 'error'});
            return;
        }
        if(!REGEX_PASSWORD_VALIDATOR.test(creds.password)){
            toast('Please enter a password with atleast: 8 total characters, 1 special character, an uppercase and lowercase character, and a number.', {type: 'error'})
            return;
        }

        try{
            const result = await register(creds)
            console.log(result.data);
            if(result.data.success){
                toast('Successfully registered!', {type:'success'});
                navigate('/login');
            } else {
                toast(result.data.errorMessage || 'Something went wrong! Please try again later.', {type: 'error'})
            }
        } catch(err){
            toast(new Error(err).message, {type: 'error'});
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

            <p style={{maxWidth:350,fontSize:12,color:'white',lineHeight:2,alignSelf:'flex-start'}}>
                By registering, you are agreeing to SkillCenter's 
                <Link to="/terms" style={{fontWeight:'bold', cursor: 'pointer'}}> Terms of Service </Link> 
                and <Link to="/privacy" style={{fontWeight:'bold',cursor: 'pointer'}}>Privacy Policy</Link>
            </p>

            <SubmitButton isLoading={isLoading} style={{width:'100%',marginTop:0,}} onClick={handleRegister}>Continue</SubmitButton>

            <p style={{color:'white',marginBottom:0,fontSize:12,alignSelf:'flex-start',cursor:'pointer'}}>Already have an account? <Link to='/login' style={{fontWeight:'bold'}}>Login</Link></p>
        </FormContainer>
        </Banner>
    )
}

export default Register;