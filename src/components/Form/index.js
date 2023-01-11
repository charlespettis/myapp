
import styled from "styled-components"

const FormInputGroup = styled.label`
    font-weight: 600;
    display: flex;
    flex-direction: column;
    color: rgba(255,255,255,.75);
    text-transform: uppercase;
    width:100%;
    margin-bottom: 15px;
    font-size: 14px;
`

const FormInput = styled.input`

    width:100%;
    margin-top: 5px;
    min-height: 40px;
    background-color:rgb(32,34,37);
    font-size:16px;
    padding: 7px;
    border: none;
    color:white;
    outline: none;
    box-sizing: border-box;

`

const FormContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(54,57,62);
    padding:30px;
    min-width: 350px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,.75);
`

const FormHeaderText = styled.p`
    color:white;
    font-size: 18px;
    font-weight: 500;
`
export {
    FormInputGroup,
    FormInput,
    FormContainer,
    FormHeaderText
}