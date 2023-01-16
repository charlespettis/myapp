import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Banner from '../components/common/Banner';
import Logo from '../components/common/Logo';

const Landing = () => {

    if(window.innerWidth < 750) return <MobileSupport/>

    return(
    <>
        <Banner src={require('../assets/images/lp-bg.jpg')} style={{minHeight:'100vh'}}>
            <div style={{backgroundColor:'rgb(54,57,62)',alignItems:'center',display:'flex',flexDirection:'column',padding:35,borderRadius:10,boxShadow: '0px 0px 5px 0px rgba(0,0,0,.75)'}}>
            <Logo/>
            <Header>Join the Club...</Header> 
            <Text>...where we teach everyone how to code, get that job, or build that app.  </Text>
            <ButtonGroup>
                <Link to={'/register'}>
                    <RoundedButton>
                        Create an Account
                    </RoundedButton>
                </Link>
                <Link to={'/login'}>
                    <RoundedButton>
                        Login
                    </RoundedButton>
                </Link>
            </ButtonGroup>
            </div>
        </Banner>
    </>
    )
}

const MobileSupport = () => {
    return(
        <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',paddingTop:25}}>
            <Logo type='light'/>
            <img src={require('../assets/images/undraw_Loading_re_5axr.png')} width={500} height={'auto'} style={{marginTop:25}}/>
            <h3>Sorry!</h3>
            <p style={{textAlign:'center',fontFamily:'helvetica',width:"80%",fontSize:22}}>We're  hard at work developing a SkillCenter mobile app for iOS and Android.  Unfortunately, until then, our site is only optimized for use on desktops and laptops. Stay tuned!</p>
        </div>
    )
}

const Header = styled.h1`
    color:white;
    font-weight: 700;
    font-size: 42px;
    text-shadow: 0px 0px 5px black;
    margin-bottom: 0px;
`
const Text = styled.p`
    color:white;   
    text-shadow: 0px 0px 5px black;
    font-size:22px;

`

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 10px;
`

const RoundedButton = styled.button`
    background-color: white;
    border-radius: 50px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,.5);
    font-size:20px;
    padding:10px 25px;
    border:none;
    font-weight: 500;
    cursor: pointer;
`

export default Landing;