import React from "react";
import { useCreateForumPostMutation, useCreateForumPostReplyMutation, useGetForumPostQuery, useGetForumPostsQuery, useGetForumsQuery } from "../app/services/auth";
import styled from "styled-components";
import ForumsList from "../components/Forums/ForumsList";
import ForumButton from "../components/Forums/ForumButton";
import PostPreview from "../components/Forums/PostPreview";
import PostsPreviewHeader from "../components/Forums/PostsPreviewHeader";
import CreatePost from "../components/Forums/CreatePost";
import ViewPost from "../components/Forums/ViewPost";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Forums = () => {
    const navigate = useNavigate();
    const {forumId, postId} = useParams();

    const {data, isLoading, isSuccess} = useGetForumsQuery();
    const [createForumPost, createForumOptions] = useCreateForumPostMutation();
    const [createForumPostReply, createForumPostOption] = useCreateForumPostReplyMutation();

    const Posts = useGetForumPostsQuery({id: forumId}, {skip: !forumId});
    const SelectedPost = useGetForumPostQuery({id: postId}, {skip: !postId})

    let rooms = [];
    if(isSuccess && data?.success) rooms = data.forums.User_Groups.map(e => e.group.forums).flat();
    
    const handleSubmitPost = async post => {
        try{
            const result = await createForumPost({...post, forumId: forumId});
            if(result.data.success){
                toast('Successfully posted', {type:'success'});
                await Posts.refetch();
                navigate(`/forums/${forumId}/${result.data.id}`)
            } else {
                toast(result.data.errorMessage, {type: 'error'});
            }  
        } catch(err){
            console.log(err);
        }
    }

    const handleSelectRoom = id => {
        navigate(`/forums/${id}/`);
    }

    const handleSelectPost = id => {
        navigate(`/forums/${forumId}/${id}`);
    }

    const handleSubmitReply = async text => {
        try{
            const result = await createForumPostReply({id: postId, text });
            if(result.data.success){
                toast('Successfully posted reply.', {type:'success'});
                SelectedPost.refetch();
            } else {
                toast(result.data.errorMessage, {type:'error'});
            }
        } catch(err){
            console.log(err);
        }
    }

    return(
        <Row>
            <ForumsList
                flex={1}
                renderData={rooms}
                renderItem = {e => <ForumButton focused={forumId === e.id} onClick={() => handleSelectRoom(e.id)} title={e.title}/>}
            />
            {
            forumId ?
            <>
            <ForumsList
                flex={1.5}
                renderHeader={<PostsPreviewHeader onClick={() => navigate(`/forums/${forumId}`)}/>}
                renderData={Posts.data?.posts?.posts}
                renderItem = {e => <PostPreview focused={postId === e.id} onClick={() => handleSelectPost(e.id)} username={e.user.username} text={e.text} title={e.title}/>}
            />

            <PostWindow>
                {
                    forumId && postId ?
                    <ViewPost onSubmitReply={handleSubmitReply} data={SelectedPost}/>
                    :
                    <CreatePost onSubmit={handleSubmitPost} roomId={forumId} />
                }
            </PostWindow>
            </>
            :
            <BlankSpaceBG/>
            
            }
        </Row>
    )
}

const BlankSpaceBG = styled.div`
    display: flex;
    flex:3.25;
    height:100%;
    background-color: #ffffff;
    opacity: 0.2;
    background-image:  linear-gradient(#444cf7 0.8px, transparent 0.8px), linear-gradient(90deg, #444cf7 0.8px, transparent 0.8px), linear-gradient(#444cf7 0.4px, transparent 0.4px), linear-gradient(90deg, #444cf7 0.4px, #ffffff 0.4px);
    background-size: 20px 20px, 20px 20px, 4px 4px, 4px 4px;
    background-position: -0.8px -0.8px, -0.8px -0.8px, -0.4px -0.4px, -0.4px -0.4px;    
`

const Row = styled.div`
    display:flex;
    flex:1;
    flex-direction: row;
    align-items: center;
    overflow-y: hidden;
`

const PostWindow = styled.div`
    display:flex;
    flex:1.75;
    height:100%;
    padding:15px;
`

export default Forums;