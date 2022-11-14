import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import HeaderFunctions from './HeaderFunctions';
import Screen from './Screen';
import LogOutButton from '../../common/LogOutButton';
import CreateCourse from '../../../screens/CreateCourse';
import CreateArticle from '../../../screens/CreateArticle';
const SideNav = props => {
    return(
        <Row>
            <Container>
                {props.headerComponent}

                <nav>
                    <ul>
                        {
                            props.children
                        }
                    </ul>
                </nav>

                <LogOutButton/>
            </Container>

            <Content>
               
                <HeaderFunctions/>


                <Routes>
                    
                    {
                        props.children.map(e => {
                            return(
                                <Route path={e.props.path} element={e.props.element}/>
                            )
                        })
                    }
                    <Route path='/create/course' element={<CreateCourse/>} />
                    <Route path='/create/article' element={<CreateArticle/>} />

                </Routes>

 
            </Content>
        </Row>
    )
}

const Container = styled.div`
    height:100vh;
    background-color:rgb(24,43,77);
    display:flex;
    min-width: 15vw;
    width: 15vw;
    flex-direction:column;
`

const Content = styled.main`
    display:flex;
    flex-direction:column;
    padding: 0px 15px;
    height: 100vh;
    width: 83vw;
    overflow-x: scroll;
`


const Row = styled.div`
  display:flex;
  flex-direction: row;
  max-width: 100vw;
`

SideNav.Screen = Screen;

export default SideNav;