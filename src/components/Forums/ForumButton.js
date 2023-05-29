import React from "react";
import styled from "styled-components";
import Icon from "../common/Icon";

const ForumButton = props => {
    
    return(
        <ForumButtonContainer focused={props.focused} onClick={props.onClick}>
            <Icon color={props.focused ? 'white' : 'black'} size={18} name='message' />
            <FormButtonText focused={props.focused}>
            {props.title}
            </FormButtonText>
            <Icon name='arrow-right' color='white' size={18} style={{marginLeft:'auto'}}/>
        </ForumButtonContainer>
    )
}

const ForumButtonContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    gap:10px;
    padding:15px;
    cursor: pointer;
    border-bottom:1px solid rgba(0,0,0,.1);
    background-color: ${props => props.focused ? '#4574C4' : 'transparent'};
`

const FormButtonText = styled.p`
    margin: 0px;
    color: ${props => props.focused ? 'white' : 'black'};
`

export default ForumButton;