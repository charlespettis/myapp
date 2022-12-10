import React from 'react';
import Composer from '../components/common/Composer';
import { useCreateVideoMutation } from '../app/services/auth';
import {toast} from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import VideoComposer from '../components/Composer/VideoComposer';

const CreateVideo = () => {

    const [create, {isLoading}] = useCreateVideoMutation();
    const [url, setUrl] = React.useState(null);
    const navigate = useNavigate();
    const state = useLocation();
    const steps = state.state?.steps;
    const [duration, setDuration] = React.useState(0);

    const handleCreateVideo = async data => {
        try{
            const result = await create({
                duration: duration,
                ...data
            })
            
            if(result.data.url){
                const postVideo = fetch(result.data.url, {
                    method: 'PUT',
                    body: url,
                    redirect: 'follow'
                })

                toast.promise(
                postVideo,
                {
                  pending: 'Video is uploading, please do not close this tab.',
                  success: 'Video uploaded.',
                  error: 'There was an error uploading your video. Please try again later.'
                })

                if(steps){
                        const newObj = Object.assign({type: 'video'}, result.data.dataValues);
                        steps.push(newObj);
                        navigate('/create/course', { state:{ steps:steps}})
            
                    }
            }
        } catch(err){
            console.log(err);
            toast('Something went wrong', {type: 'error'});
        }
    }

    return(
        <>
        <Composer
        noPlacement={steps}
        onSubmit={handleCreateVideo}
        component={<VideoComposer
            url={url}
            onChangeDuration={e => {setDuration(e)}}
            onChange={e =>{setUrl(e)}}
        />}
        />

        </>


    )
}


export default CreateVideo;