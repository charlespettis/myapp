import React from 'react';
import styled from 'styled-components';
import Loader from '../../assets/images/Spin-1s-200px (1).gif';

const SubmitButton = props => {

    return(
        <Button onClick={props.onClick} style={{...props.style}}>

            {
                props.isLoading?
                <img
                src={Loader}
                width={20}
                /> 
                :
                props.children
            }
        </Button>

    )
}

const Button = styled.button`
    width:20em;
    align-self:flex-end;
    min-height: 1em;
    background-color:#3B69BA;
    cursor:pointer;
    padding:10px 40px;
    outline:none;
    border:none;
    color:white;
    font-family: 'Verdana';
    border-radius: 5px;
`

export default SubmitButton;