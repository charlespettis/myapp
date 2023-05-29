import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Banner from '../components/common/Banner';
import Logo from '../components/common/Logo';
import IOSDownloadImg from '../assets/images/downloadappstore.webp';
import OutlineButton from '../components/buttons/OutlineButton';
import Icon from '../components/common/Icon';

const Landing = () => {

    const isMobile = window.innerWidth < 750;

    return(
    <main style={{minHeight:'100vh',backgroundColor:'black'}}>
        <Banner src={require('../assets/images/lphero.png')} style={{minHeight:600,justifyContent:'flex-start',minWidth:'100vw',backgroundColor:'black',backgroundSize:'cover'}}>
            <div style={{display:'flex',alignItems:'flex-start',flexDirection:'column',height:'100%',width:'100%',paddingLeft:'3%',paddingTop:'3%',boxSizing:'border-box'}}>
            <Logo size={42} style={{alignSelf:'flex-start'}}/>
            <h1 style={{textShadow:'0px 0px 10px black',color:'white',fontSize:42}}>Build an App &#x2022; Get a Job &#x2022; Change the World</h1>
            <h2 style={{textShadow:'0px 0px 10px black',color:'white'}}>Learn how to build websites, apps, video games, and more.</h2>
            <p style={{textShadow:'0px 0px 10px black',fontSize:24,color:'white'}}>Join the Club for FREE</p>
            {            
            !isMobile ? 
            <ButtonGroup>
                <Link to={'/register'}>
                    <OutlineButton style={{fontSize:18,backgroundColor:'white',border:'none',color:'black'}}>
                        Create an Account
                    </OutlineButton>
                </Link>
                <Link to={'/login'}>
                    <OutlineButton style={{fontSize:18,backgroundColor:'white',border:'none',color:'black'}}>
                        Login
                    </OutlineButton>
                </Link>
            </ButtonGroup>
            :
            <MobileSupport/>
            }
            </div>
        </Banner>
        <div style={{display:'flex',flexDirection:isMobile ? 'column' : 'row',justifyContent:'space-around',gap:20,padding:'0px 20px'}}>
        <InfoCard title={'A Growing Catalog'} description={'Get access to an ever-growing catalog of programming articles, video tutorials, and courses. Updated often.'} iconName={'journal-code'}/>
        <InfoCard title={'Build Experiences'} description={'Learn on your own or connect with others to build unique mobile and desktop experiences.'} iconName={'wrench'}/>
        <InfoCard title={'Learn on the Go'} description={'Download the SkillCenter mobile app on the App Store after signing up on your computer. Android app coming soon.'} iconName={'mobile'}/>
        <InfoCard title={'A Positive Mission'} description={'By siging up and supporting SkillCenter, you are supporting our mission of providing accessible programming education to everyone, in a way anyone can understand.'} iconName={'heart'}/>
        </div>
    </main>
    )
}

const MobileSupport = () => {
    return(
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <img src={IOSDownloadImg} onClick={() => window.location = 'https://apps.apple.com/us/app/skillcenter/id6445859826'}  width={200}/>
        </div>
    )
}

const InfoCard = props => {
    return(
    <div style={{display:'flex',flexDirection:'column',flex:1,padding:15,boxShadow:'0px 0px 5px 0px rgba(255,255,255,.5)',borderRadius:5}}>
        <Icon size={32} color='rgba(255,255,255,.8)' name={props.iconName}/>
        <h3 style={{color:'white'}}>{props.title}</h3>
        <p style={{color:'white'}}>{props.description}</p>
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