import React from "react";
import styled from "styled-components";
import Editor from "../Editor";

const PostPreview = props => {
    return(
        <PostPreviewContainer focused={props.focused} onClick={props.onClick}>
            <p style={{marginBottom:0,marginTop:0,paddingBottom:0,fontWeight:700}}>{props.title}</p>
            <p style={{margin:'5px 0px',fontSize:14,fontWeight:300,color:'blue'}}>@{props.username}</p>
            <Editor
            inputStyle={{overflowY:'hidden'}}
            contentStyle={{maxHeight:150,backgroundColor:'#f1f1f1'}}
            style={{maxHeight:150,backgroundColor:'#f1f1f1',}}
            text={props.text}
            />
        </PostPreviewContainer>
    )
}

const PostPreviewContainer = styled.div`
    padding:10px;
    max-height: 200px;
    border-bottom:1px solid rgba(0,0,0,.2);
    padding-bottom: 30px;
    background-color: ${props => props.focused ? 'rgba(0,0,255,.03)' : 'transparent'};
    cursor: pointer;
`

const PostPreviewText = styled.div`
    max-height: 150px;
`

export default PostPreview;