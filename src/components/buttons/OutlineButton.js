import React from 'react';
import styled from 'styled-components';

const OutlineButton = props => {

    return(
        <OutlineButtonContainer style={{...props.style}} onClick={props.onClick} >
            {props.children}
        </OutlineButtonContainer>
    )
}

const OutlineButtonContainer = styled.button`
    cursor:pointer;
    border-top-left-radius:3px;
    border-top-right-radius:3px;
    border-width:2px;
    padding:7px 20px;
    background-color: transparent;
    border-radius:3px;
    border-color:blue;
    color:blue;
    font-size:14px;
    transition: .1s color linear, .1s background-color linear;

    &:hover{
        color:white;
        background-color:blue;
        transition: .1s color linear, .1s background-color linear;
    }

`

export default OutlineButton;