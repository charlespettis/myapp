import React from "react";
import Editor from "../Editor";
import styled from "styled-components";
import SubmitButton from "../buttons/SubmitButton";

const ViewPost = props => {

    const [mode, setMode] = React.useState('reply');

    const text = props?.data?.data?.post?.text;
    const title = props?.data?.data?.post?.title;
    const username = props?.data?.data?.post?.user?.username;
    const replies = props?.data?.data?.post?.replies;
    const [replyText, setReplyText] = React.useState('');

    if(props?.data?.data?.success) return(
        <ViewPostContainer>
            <h2 style={{margin:'20px 0px',padding:0}}>{title}</h2>
            <p style={{margin:'0px 0px',padding:0,color:'blue',fontWeight:300}}>@{username}</p>
            <Editor contentStyle={{overflowY:'none'}}  style={{marginTop:0,overflowY:'scroll'}} text={text} />
            <div style={{marginTop:0,display:'flex',flexDirection:'row',justifyContent:'flex-end',width:'100%',gap:10}}>
                <h3 onClick={() => setMode('all')} style={{color:mode==='all' ? 'blue' : 'black',marginTop:0,textAlign:'center'}}>All Replies</h3>|<h3 onClick={() => setMode('reply')} style={{color: mode === 'reply' ? 'blue' : 'black',textAlgin:'center',marginTop:0}}>Reply</h3>
            </div>
            {
            mode === 'reply' ? 
            <div style={{height:400}}>
            <Editor editable minimizedToolbar onChange={e => setReplyText(e)} style={{marginTop:0,maxHeight:350}} placeholder='Begin writing your response'/>
            <SubmitButton onClick={() => {setMode('all'); setReplyText(''); props.onSubmitReply(replyText)}} style={{width:'100%'}}>Reply</SubmitButton>
            </div>
            :
            <div style={{overflowY:'scroll',maxHeight:400,minHeight:400}}>
            {
                Array.isArray(replies) && new Array(replies).length  &&
                replies.map(e => 
                    <div style={{borderBottom:'1px solid rgba(0,0,0,.2)',paddingBottom:30}}>
                    <p style={{marginBotttom:0,fontWeight:300,color:'blue'}}>@{e.user.username}</p>
                    <Editor text={e.text}
                    contentStyle={{overflowY:'scroll', maxHeight:200,backgroundColor:'#f1f1f1'}}
                    style={{overflowY:'scroll',maxHeight:200,backgroundColor:'#f1f1f1'}}
                    
                    />
                    </div>
                )
            }
            </div>
            }
        </ViewPostContainer>
    )
}

const ViewPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
    overflow-y: scroll;
`

export default ViewPost;