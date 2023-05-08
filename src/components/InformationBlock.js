import React from 'react';
import { AiFillInfoCircle, AiFillWarning } from 'react-icons/ai';
import styled from 'styled-components';

const InformationBlock = props => {
    const ICON_TYPES = {
        'warning': <AiFillWarning size={42} color='darkorange'/>,
        'info': <AiFillInfoCircle size={42} color='darkblue'/>
    }

    return(
        <InformationBlockContainer type={props.type}>
            {
                ICON_TYPES[props.type]
            }

            <p style={{marginLeft:10,opacity:.8}}>{props.children}</p>

        </InformationBlockContainer>
    )
}

const InformationBlockContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.type === 'warning' ? 'rgba(255,140,0,.25)' : props.type == 'info' ? 'rgba(0,0,255,.25)' : 'transparent'};
    border-radius: 5px;
    padding:5px;
`

export default InformationBlock;