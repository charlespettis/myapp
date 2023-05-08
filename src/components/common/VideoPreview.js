import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { parseThumbnail } from '../helpers';
import Icon from './Icon';

const VideoPreview = (props) => {
    const thumbnail = parseThumbnail(props.thumbnail)
    return(
        <ItemPreviewContainer background={thumbnail ? thumbnail : 'black'} onClick={props.onClick}>
            
                <ItemPreviewSection>
                    <ItemPreviewIcon 
                        name={props.icon}
                        size={42}
                    />
                    <ItemPreviewIcon 
                        name={`${props.type}-solid`}
                        size={26}
                    />

                </ItemPreviewSection>

                <ItemPreviewSection>

                    <ItemPreviewText>{props.title}</ItemPreviewText>

                </ItemPreviewSection>


        </ItemPreviewContainer>
    )
}

const ItemPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    background: ${props => props.background};
    width:18em;
    height:10em;
    border-radius:5px;
    padding: 0px;
    filter: grayscale(20%);
    padding:10px;
    box-sizing: border-box;

`

const ItemPreviewSection = styled.div`
    display: flex;
    flex:1;
    justify-content: space-between;
`

const ItemPreviewIcon = styled(Icon)`
    filter:drop-shadow(0px 0px 5px rgba(0,0,0,1));
    color:white;
    margin-top:0px;
    margin-left: 0px;
`

const ItemPreviewText = styled.p`
    margin:0px;
    font-family:'Helvetica';
    font-weight:600;
    text-shadow: 0px 0px 5px black;
    font-size: 18px;
    color: white;
    align-self: flex-end;
    line-height: 130%;
    max-width: 80%;
`


export default VideoPreview;
