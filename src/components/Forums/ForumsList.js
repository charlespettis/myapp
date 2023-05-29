import React from "react";
import styled from "styled-components";

const ForumsList = props => {
    return(
        <ForumsListContainer style={props.style} borderRight={props.borderRight} flex={props.flex}>
            {
                props.renderHeader && props.renderHeader
            }
            {
                Array.isArray(props.renderData) && props.renderData.map(e => {
                    return props.renderItem(e);
                })
            }
        </ForumsListContainer>
    )
}

const ForumsListContainer = styled.div`
    display:flex;
    flex:${props => props.flex};
    flex-direction: column;
    height:100%;
    border-right: 1px solid rgba(0,0,0,.1);
    overflow-y: scroll;
`

export default ForumsList;