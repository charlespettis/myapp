import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import OutlineButton from '../buttons/OutlineButton';
import Icon from './Icon';

const ContentLock = props => {
    return(
    <ContentLockContainer>
        <Icon size={74} name='lock'/>
        <h1 style={{textTransform:'uppercase'}}>Come Back Tomorrow for more!</h1>
        <h1 style={{textTransform:'uppercase'}}>OR</h1>
        
        <Link to='/billing'>
            <OutlineButton style={{fontSize:18}}>JOIN THE CLUB</OutlineButton>
        </Link>
        
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