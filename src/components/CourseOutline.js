
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
    
    const addCell = () => {
        setVisible(!visible)
    }

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
            <div style={{display:'grid',gridTemplateRows:'repeat(autofill,minmax(100px,1fr))',gridTemplateColumns:'repeat(auto-fill, minmax(300px,1fr) )',rowGap:100,width:'100%',marginTop:20}}>
                {
                    generateOutline()
                }
                
            </div>
            {
            visible &&
            <Modal setVisible={setVisible} visible={visible}>
                    <GroupButton setVisible={setVisible} steps={steps}/>
             </Modal>
            }

        </>
    )

}

const GroupButton = props => {
    const [hover, setHover] = React.useState('');
    const [type, setType] = React.useState('');
    const navigate = useNavigate();
    return(
        <div style={{borderRadius:5,backgroundColor:'white',boxShadow:'0px 0px 5px 0px rgba(0,0,0,0.25)',display:'flex',flexDirection:'row',alignItems:'center'}}>
            {
                type ? 
            <>
            <div onClick={()=>{
                props.setVisible(false)

                 navigate(`/create/${type}`, {state: {steps: props.steps} })
            }} onMouseEnter={()=>{setHover('video')}} onMouseLeave={()=>{setHover('')}} style={{backgroundColor:hover === 'video' ? '#f1f1f1' : 'transparent',display:'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:22,cursor:'pointer'}}>
                <Icon name='plus' size={26} style={{marginBottom:10}}/>
                <p style={{margin:0,padding:0,fontSize:20}}>Create</p>
            </div>

            <div onClick={()=>{
                navigate('/search', {state: {type: type, steps: props.steps} })
            }} onMouseEnter={()=>setHover('article')} onMouseLeave={()=>setHover('')} style={{backgroundColor:hover === 'article' ? '#f1f1f1' : 'transparent',display:'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:22,cursor:'pointer'}}>
                <Icon name='search' size={26} style={{marginBottom:10}}/>
                <p style={{margin:0,padding:0,fontSize:20}}>Search</p>
            </div>
            </>
            :
            <>
            <div onClick={()=>setType('video')} onMouseEnter={()=>{setHover('video')}} onMouseLeave={()=>{setHover('')}} style={{backgroundColor:hover === 'video' ? '#f1f1f1' : 'transparent',display:'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:22,cursor:'pointer'}}>
                <Icon name='video' size={26} style={{marginBottom:10}}/>
                <p style={{margin:0,padding:0,fontSize:20}}>Video</p>
            </div>

            <div onClick={()=>setType('article')} onMouseEnter={()=>setHover('article')} onMouseLeave={()=>setHover('')} style={{backgroundColor:hover === 'article' ? '#f1f1f1' : 'transparent',display:'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:22,cursor:'pointer'}}>
                <Icon name='article' size={26} style={{marginBottom:10}}/>
                <p style={{margin:0,padding:0,fontSize:20}}>Article</p>
            </div>

            </>
            }
        </div>
    )
}

const EmptyCell = props => {
    const [hover, setHover] = React.useState(false);

    return(
        <button onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onClick={props.onClick} style={{width:'21em',height:'12em',backgroundColor:'white',borderRadius:5,border:'none',boxShadow:`0px 0px ${hover ? '5px' : '5px'} rgba(0,0,0,.25)`, cursor:'pointer', ...props.style}}>
            <Icon name='plus' size={32} color='black' style={{padding:50}}/>
        </button>
    )
}

export default CourseOutline;