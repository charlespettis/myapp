import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Screen from './Screen';
import LogOutButton from '../../common/LogOutButton';
import Icon from '../../common/Icon';
const SideNav = props => {
    return(
        <Container>
            <Sidebar>
                {props.headerComponent}

                <SidebarNav>
                    <ul>
                        {
                            props.children
                        }
                    </ul>
                </SidebarNav>
                <BillingButton/>
                <LogOutButton/>
            </Sidebar>

            <Content>
                <Routes>
                    
                    {
                        props.children.map(e => {
                            return(
                                <Route path={e.props.path} element={e.props.element}/>
                            )
                        })
                    }

                </Routes>

 
            </Content>
        </Container>
    )
}

const BillingButton = () => {
    return(
        <Link to='/billing' style={{marginTop:'auto'}}>
        <div style={{cursor:'pointer',marginLeft:20,display:'flex',flexDirection:'row',alignItems:'center',color:'rgba(255,255,255,.7)'}}>
        <Icon name='card' style={{marginRight:20}} size={22}/>
        Billing
        </div>
        </Link>
    )
}

const Sidebar = styled.div`
    background-color:rgb(24,43,77);
    display:flex;
    flex:1;
    flex-direction:column;
    justify-content: space-evenly;
    padding-top:25px;
`

const SidebarNav = styled.nav`
    margin-top: 1em;
`

const Content = styled.main`
    display:flex;
    flex-direction:column;
    flex:5;
    overflow: scroll;
`


const Container = styled.div`
  display:flex;
  flex-direction: row;
  height:100vh;
  width:100vw;
`

SideNav.Screen = Screen;

export default SideNav;