import React from 'react';
import styled from 'styled-components';
import Icon from '../common/Icon';

const IconButton = props => {

    return(
        <Button onClick={props.onClick}>
            <Row>
                <Icon name={props.name} />
                {props.children}
            </Row>
         </Button>

    )
}

const Button = styled.button`
    background-color: transparent;
    border: none;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export default IconButton;