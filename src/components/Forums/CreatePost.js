import React from "react";
import Editor from "../Editor";
import OutlineButton from "../buttons/OutlineButton";
import styled from "styled-components";
import {toast} from 'react-toastify';
import SubmitButton from "../buttons/SubmitButton";

const CreatePost = props => {
    const [data, setData] = React.useState({
        title: '',
        text: ''
    })

    const handleSubmit = () => {
        if(!data.title){
            toast('Please add a title to your post', {type: 'error'})
            return;
        }

        props.onSubmit(data);

    }

    return(
        <div style={{height:700,padding:'25px 0px',flex:1}}>
            <CreatePostTextInput value={data.title} onChange={e => setData({...data, title: e.currentTarget.value})} type='text' placeholder="Enter title..."></CreatePostTextInput>
            <Editor minimizedToolbar placeholder='Begin writing your post...' inputSytle={{boxShadow:'none',width:'100%'}} contentStyle={{boxShadow:'none',width:'100%'}} style={{boxShadow:'none',width:'100%'}}  onChange={e => setData(prevState => ({...prevState, text: e}))}/>
            <SubmitButton onClick={handleSubmit} style={{marginLeft:'auto',marginTop:25,width:'100%'}}>Submit</SubmitButton>
        </div>
    )
}

const CreatePostTextInput = styled.input`
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: none;
    width:100%;
    margin-bottom:25px;
    font-size: 18px;
    padding-bottom: 5px;
`

export default CreatePost;
