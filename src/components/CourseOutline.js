
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../components/common/Icon';
import VideoPreview from '../components/common/VideoPreview';
import Modal from '../components/common/Modal';

const CourseOutline = props => {

    const [visible, setVisible] = React.useState(false);
    const state = useLocation();
    const stepsResp = state.state?.steps;
    const [steps, setSteps] = React.useState(stepsResp?.length ? stepsResp : []);
    props.onChange(steps);
    const addCell = () => {
        setVisible(!visible)
    }
    console.log(props.roadmap);
    const generateOutline = () => {
        if(!steps.length) return(<EmptyCell onClick={addCell}/>)
        return steps.map((e,i) => {
            return(
                <>
                    <VideoPreview title={e.title} thumbnail={e.thumbnail} icon={e.icon}/>    
                    {
                        i + 1 === steps.length && <EmptyCell onClick={addCell} />
                    }
                </>                                
            )

        })
    }


    return(
        <>
            <div style={{display:'grid',gridTemplateRows:'repeat(autofill,minmax(100px,1fr))',gridTemplateColumns:'repeat(auto-fill, minmax(300px,1fr) )',rowGap:100,width:'100%'}}>
                {
                    generateOutline()
                }
                
            </div>
            {
            visible &&
            <Modal setVisible={setVisible} visible={visible}>
                    <GroupButton setVisible={setVisible} roadmap={props.roadmap} steps={steps}/>
             </Modal>
            }

        </>
    )

}

const GroupButton = props => {
    const [hover, setHover] = React.useState('video');
    const [type, setType] = React.useState('');
    const navigate = useNavigate();

    return(
        <div style={{borderRadius:5,backgroundColor:'white',boxShadow:'0px 0px 5px 0px rgba(0,0,0,0.5)',display:'flex',flexDirection:'row',alignItems:'center'}}>
            {
                type ? 
            <>
            <div onClick={()=>{
                props.setVisible(false)

                 navigate(`/create/${type}`, {state: {steps: props.steps} })
            }} onMouseEnter={()=>{setHover('video')}} onMouseLeave={()=>{setHover('')}} style={{borderRadius:5,backgroundColor:hover === 'video' ? '#f1f1f1' : 'transparent',display:'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:30,cursor:'pointer'}}>
                <Icon name='plus' size={26} style={{marginBottom:10}}/>
                <p style={{margin:0,padding:0,fontSize:22}}>Create</p>
            </div>

            <div onClick={()=>{
                navigate('/search', {state: {type: type, steps: props.steps} })
            }} onMouseEnter={()=>setHover('article')} onMouseLeave={()=>setHover('')} style={{borderRadius:5,backgroundColor:hover === 'article' ? '#f1f1f1' : 'transparent',display:'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:30,cursor:'pointer'}}>
                <Icon name='search' size={26} style={{marginBottom:10}}/>
                <p style={{margin:0,padding:0,fontSize:22}}>Search</p>
            </div>
            </>
            :
            <>
            <div onClick={()=>setType('video')} onMouseEnter={()=>{setHover('video')}} onMouseLeave={()=>{setHover('')}} style={{borderRadius:5,backgroundColor:hover === 'video' ? '#f1f1f1' : 'transparent',display:'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:30,cursor:'pointer'}}>
                <Icon name='video' size={26} style={{marginBottom:10}}/>
                <p style={{margin:0,padding:0,fontSize:22}}>Video</p>
            </div>

            <div onClick={()=>setType('article')} onMouseEnter={()=>setHover('article')} onMouseLeave={()=>setHover('')} style={{borderRadius:5,backgroundColor:hover === 'article' ? '#f1f1f1' : 'transparent',display:'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:30,cursor:'pointer'}}>
                <Icon name='article' size={26} style={{marginBottom:10}}/>
                <p style={{margin:0,padding:0,fontSize:22}}>Article</p>
            </div>
            {props.roadmap && 
            <div onClick={()=>{
                setType('course')
            }} onMouseEnter={()=>setHover('course')} onMouseLeave={()=>setHover('')} style={{borderRadius:5,backgroundColor:hover === 'course' ? '#f1f1f1' : 'transparent',display:'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:30,cursor:'pointer'}}>
                <Icon name='book' size={26} style={{marginBottom:10}}/>
                <p style={{margin:0,padding:0,fontSize:22}}>Course</p>
            </div>}


            </>
            }
        </div>
    )
}

const EmptyCell = props => {
    const [hover, setHover] = React.useState(false);

    return(
        <button onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onClick={props.onClick} style={{width:'18em',height:'10em',backgroundColor:hover ? '#f1f1f1' : 'transparent',borderStyle:'dashed',borderRadius:5, cursor:'pointer', ...props.style}}>
            <Icon name='plus' size={32} color='black' style={{padding:50}}/>
        </button>
    )
}

export default CourseOutline;