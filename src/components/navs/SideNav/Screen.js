import React from "react";
import Icon from "../../common/Icon";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Screen = props => {
    const location = useLocation();
    const selected = location.pathname === props.path;
    
    if(!props.label) return null;
    
    return(
        <NavListItem>
            <NavListItemLink to={props.path}>   
                
                {
                    selected && <NavListItemHighlight />   
                }

                <Icon name={props.icon} size={22} style={{marginLeft:20}}/>
                <NavListItemLabel>
                    {props.label}
                </NavListItemLabel>

            </NavListItemLink> 
        </NavListItem>

    )
}

const NavListItem = styled.li`
    opacity: ${props => props.selected ? '1' : '.7'};
    &:hover{
        opacity: 1;
    }
`

const NavListItemLink = styled(Link)`
    list-style: none;
    cursor: pointer;
    color: white;
    margin: 1em 3em 1em 0em;
    display: flex;
    align-items: center; 
    margin-right: 50px;
`

const NavListItemLabel = styled.p`
    margin-left: 20px;
    font-size: 16px;
    margin-right:20px;
`

const NavListItemHighlight = styled.div`
    width:5px;
    height:35px;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
    background-color:white;
`

export default Screen;