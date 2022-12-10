import React from 'react'
import styled from 'styled-components'
import Icon from '../common/Icon'

const MultiSelectItem = props => {
    return(
        <MultiSelectItemContainer onClick={() => props.onClick(props.value)} value={props.value} selected={props.selected}>
        {props.children}
        </MultiSelectItemContainer>
    )
}

const MultiSelect = props => {
    return(
        <MultiSelectContainer>
            {
                props.allowClear && 
                <Icon name='close' size={20} style={{padding:15,cursor:'pointer'}} onClick={props.onClear} />
            }
            {
                props.renderData.map(e => {
                    return(
                        props.renderItem(e)
                    )
                })
            }
        </MultiSelectContainer>
    )
}

const MultiSelectContainer = styled.div`
    max-height: 250px;
    overflow-y: scroll;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 7px;
    column-gap: 7px;
    align-items: center;
    
`

const MultiSelectItemContainer = styled.div`
    cursor: pointer;
    border-style: ${props => props.selected ? 'solid' : 'none'};
    box-sizing: border-box;
    border-width: 3px;
    border-color: ${props => props.selected ? 'orange' : 'none'};
    border-radius: 5px;
    background: ${props => props.value};
    height:50px;
    width: 50px;

`


export  {
    MultiSelectItem,
    MultiSelect
}