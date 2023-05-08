import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import OutlineButton from '../buttons/OutlineButton';
import Icon from './Icon';

const ContentLock = props => {
    const navigate = useNavigate()
    return(
    <ContentLockContainer>
        <Icon size={74} name='lock'/>
        <h1 style={{textTransform:'uppercase'}}>Come back at this time tomorrow for more</h1>
        <p style={{marginBottom:50}}>Free tier users can watch or read up to 3 tutorials a day, anymore and you'll have to become a member for unlimited access to our catalog.</p>

        
        <Link to='/billing'>
            <OutlineButton style={{fontSize:18,minWidth:200}}>JOIN THE CLUB</OutlineButton>
        </Link>
            <OutlineButton onClick={() => navigate(-1)} style={{fontSize:18,minWidth:200,marginTop:20}}>go back :/</OutlineButton>

        
    </ContentLockContainer>
    )
}

const ContentLockContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default ContentLock;