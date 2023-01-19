import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Empty = () => {

    return(
        <EmptyContainer>
            <Icon name='sad' size={42}/>
            <h3>There's nothing here!</h3>
            <p>If you think there should be something here, please contact support.</p>
        </EmptyContainer>
    )
}

const EmptyContainer = styled.div`
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`

export default Empty;