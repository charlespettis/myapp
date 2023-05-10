import React from 'react';
import Composer from '../components/common/Composer';
import { useCreateVideoMutation } from '../app/services/auth';
import {toast} from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import VideoComposer from '../components/Composer/VideoComposer';

const CreateVideo = () => {

    const [create] = useCreateVideoMutation();
    const navigate = useNavigate();
    const state = useLocation();
    const steps = state.state?.steps;

    const [loading, setLoading] = React.useState(false);
    const mounted = React.useRef(false);
    const [videoDetails, setVideoDetails] = React.useState({
        url: null,
        duration: 0,
        contentType: ''
    });

    React.useEffect(() => {
        mounted.current = true;

        return () => {
            mounted.current = false;
        };
    }, []);



    const handleCreateVideo = async data => {
        console.log(videoDetails);
        if(!videoDetails.url || !videoDetails.duration || !videoDetails.contentType){
            toast('Please finish recording or uploading your video', {type: 'error'});
            return;
        }
        setLoading(true);
        try{
            const result = await create({...data, duration: videoDetails.duration, contentType: videoDetails.contentType});
            
            if(result.data.url){
                const postVideo = fetch(result.data.url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': videoDetails.contentType
                    },
                    body: videoDetails.url,
                    redirect: 'follow'
                })

                toast.promise(
                postVideo,
                {
                  pending: 'Video is uploading, please do not close this tab.',
                  success: 'Video uploaded.',
                  error: 'There was an error uploading your video. Please try again later.'
                })
                .then(()=>{
                    if(mounted.current){
                        if(steps){
                            const newObj = Object.assign({type: 'video'}, result.data.dataValues);
                            steps.push(newObj);
                            navigate('/create/course', { state:{ steps:steps}})
                        } else {
                            navigate(-1);
                        }
                    }
                    
                })
                .catch(err => {
                    toast(new Error(err).message, {type: 'error'});
                })

                
            }
        } catch(err){
            toast(new Error(err).message, {type: 'error'});
            setLoading(false);
        } 
    }

    const handleChange = data => {
        setVideoDetails(data);
    }

    return(
        <>
        <Composer
        loading={loading}
        noPlacement={steps}
        onSubmit={handleCreateVideo}
        component={<VideoComposer
            onChange={handleChange}
        />}
        />

        </>


    )
}


export default CreateVideo;