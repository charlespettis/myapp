import React from 'react';
import Icon from '../components/common/Icon';
import VideoPreview from '../components/common/VideoPreview';
import Modal from '../components/common/Modal';
import Composer from '../components/common/Composer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateCourseMutation } from '../app/services/auth';

const CreateCourse = () => {
    const [steps, setSteps] = React.useState([]);
    const [create, {isLoading}] = useCreateCourseMutation()
    console.log(steps);
    const handleSubmit = async data => {

        const body = {
            ...data,
            videos:[],
            articles:[]
        }
        
        steps.map((e,i) => {
            if(e.type === 'article'){
                body.articles.push({order: i + 1, id:e.id});
            }
            if(e.type === 'video'){
                body.videos.push({order:i + 1, id:e.id});
            }
        })
        console.log(body);

        const result = await create(body);


    }

    return(
    <Composer
    onSubmit={handleSubmit}
    component={<CourseOutline
    onChange={e=>{setSteps(e)}}
    />}
    />
    )
}


export default CreateCourse;


const CourseOutline = props => {

    const [visible, setVisible] = React.useState(false);
    const state = useLocation();
    const stepsResp = state.state?.steps;
    const [steps, setSteps] = React.useState(stepsResp?.length ? stepsResp : []);
    props.onChange(steps);
    console.log(stepsResp);
    const addCell = () => {
        setVisible(!visible)
    }

    return(
        <>
            <div style={{display:'flex',flexDirection:'row',alignItems:'flex-start',width:'100%',flexWrap:'wrap',rowGap:50,overflowY:'scroll'}}>
                {
                    !steps.length ? 
                    <EmptyCell onClick={addCell} />
                    :
                    steps.map((e,i) => {
                        if(i !== steps.length - 1){
                            return(
                                    <VideoPreview title={e.title} thumbnail={e.thumbnail} icon={e.icon}/>       
                            )
                        } else {
                            return(
                                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                    <VideoPreview title={e.title} thumbnail={e.thumbnail} icon={e.icon}/>
                                    <EmptyCell onClick={addCell} style={{alignSelf:'flex-start'}} />
                                    
                                </div>
                            )
                        }
                    })
                }

            </div>

            <Modal setVisible={setVisible} visible={visible}>
                <GroupButton steps={steps}/>
            </Modal>

        </>
    )

}

const GroupButton = props => {
    const [hover, setHover] = React.useState('video');
    const navigate = useNavigate();

    return(
        <div style={{borderRadius:5,backgroundColor:'white',boxShadow:'0px 0px 5px 0px rgba(0,0,0,0.5)',display:'flex',flexDirection:'row',alignItems:'center',minWidth:200}}>
            <div onMouseEnter={()=>{setHover('video')}} onMouseLeave={()=>{setHover('')}} style={{borderRadius:5,backgroundColor:hover === 'video' ? '#f1f1f1' : 'transparent',display:'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:30,cursor:'pointer'}}>
                <Icon name='video' size={26} style={{marginBottom:10}}/>
                <p style={{margin:0,padding:0,fontSize:22}}>Video</p>
            </div>

            <div onClick={()=>{
                navigate('/create/article', {state: {steps: props.steps} })
            }} onMouseEnter={()=>setHover('article')} onMouseLeave={()=>setHover('')} style={{borderRadius:5,backgroundColor:hover === 'article' ? '#f1f1f1' : 'transparent',display:'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:30,cursor:'pointer'}}>
                <Icon name='article' size={26} style={{marginBottom:10}}/>
                <p style={{margin:0,padding:0,fontSize:22}}>Article</p>
            </div>
        </div>
    )
}

const EmptyCell = props => {
    const [hover, setHover] = React.useState(false);

    return(
        <button onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onClick={props.onClick} style={{width:'21.5em',height:'12em',backgroundColor:hover ? '#f1f1f1' : 'transparent',borderStyle:'dashed',borderRadius:5, cursor:'pointer', ...props.style}}>
            <Icon name='plus' size={32} color='black' style={{padding:50}}/>
        </button>
    )
}

const FillCell = props => {
    return(
        <div style={{height:150,minWidth:250,borderRadius:10,backgroundColor:'black'}}></div>
    )
}