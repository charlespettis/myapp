import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Screen from './Screen';
import LogOutButton from '../../common/LogOutButton';
const SideNav = props => {
    return(
        <Container>
            <Sidebar>
                {props.headerComponent}

                <nav>
                    <ul>
                        {
                            props.children
                        }
                    </ul>
                </nav>

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

const Sidebar = styled.div`
    background-color:rgb(24,43,77);
    display:flex;
    flex:1;
    flex-direction:column;
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