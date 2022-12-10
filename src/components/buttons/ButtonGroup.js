import React from 'react';
import styled from 'styled-components';

const ButtonGroup = props => {
    return(
        <ButtonGroupContainer style={{...props.style}}>
            {
                props.children.map((e,i) => {
                    return(
                        <>
                        {e}

                        { i + 1 !== props.children.length && <ButtonDivider/>}
                        </>
                    )
                })
            }
        </ButtonGroupContainer>
    )
}

export default ButtonGroup;

const ButtonGroupContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    align-self: center;
`

const ButtonDivider = styled.div`
    margin: 0px 10px;
    height: 50%;
    width:1px;
    background-color: rgba(0,0,0,.25);

`