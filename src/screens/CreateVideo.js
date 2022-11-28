import React from 'react';
import ScreenRecorder from '../components/ScreenRecorder';
import DropZone from '../components/DropZone';
import Composer from '../components/common/Composer';
import { useCreateVideoMutation } from '../app/services/auth';
import {toast} from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const CreateVideo = () => {

    const [create, {isLoading}] = useCreateVideoMutation();
    const [url, setUrl] = React.useState(null);
    const navigate = useNavigate();
    const state = useLocation();
    const steps = state.state?.steps;
    console.log(steps);
    const handleCreateVideo = async data => {
        try{
            const result = await create(data)
            
            
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
                }
            )
                if(steps){
                    console.log('reeee');
                    const newObj = Object.assign({type: 'video'}, result.data.dataValues);
                    console.log(newObj);
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
        component={<Record
            onChange={e =>{setUrl(e)}}
        />}
        />

        </>


    )
}

const Record = props => {
    const [type,setType] = React.useState('record');

    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginBottom:10,alignSelf:'center'}}>
                <p onClick={()=>setType('record')} style={{color:type === 'record' ? 'black' : 'rgba(0,0,0,.8)',fontSize:20,fontWeight:type === 'record' ? 600 : 400}}>Record</p> 
                <span style={{margin:'0px 10px',height:'50%',width:1,backgroundColor:'rgba(0,0,0,.25)'}}/> 
                <p onClick={()=>setType('upload')} style={{fontWeight:type === 'upload' ? 600 : 400,color:type === 'upload' ? 'black' : 'rgba(0,0,0,.8)',fontSize:20}}>Upload</p>
            </div>
            
            {
            type === 'record' ?
            <ScreenRecorder onChange={props.onChange} />
            :
            <DropZone />
            }
            
        </div>
    )
}


export default CreateVideo;