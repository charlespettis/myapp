import React from 'react';
import styled from 'styled-components';

const SubmitButton = props => {

    return(
        <Button onClick={props.onClick}>
            {props.children}
        </Button>

    )
}

const Button = styled.button`
    width:20em;
    margin-top:auto;
    align-self:flex-end;
    background-color:#3B69BA;
    cursor:pointer;
    padding:10px 40px;
    outline:none;
    border:none;
    color:white;
    font-family: 'Verdana';
    margin-bottom:20px;
`

export default SubmitButton;