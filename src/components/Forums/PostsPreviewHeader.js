import React from "react";
import OutlineButton from "../buttons/OutlineButton";
import SubmitButton from "../buttons/SubmitButton";

const PostsPreviewHeader = props => {
    return(
        <div style={{height:30,display:'flex',width:'100%',justifyContent:'center',margin:'10px 0px'}}>
        <SubmitButton onClick={props.onClick} style={{alignSelf:'center',width:'90%',margin:10,alignSelf:'center'}}>
            Create
        </SubmitButton>
        </div>
    )
}

export default PostsPreviewHeader;