import React from 'react';
import Icon from '../components/common/Icon';
import VideoPreview from '../components/common/VideoPreview';
import Modal from '../components/common/Modal';
import Composer from '../components/common/Composer';

const CreateCourse = () => {
    return(
    <Composer
    component={<CourseOutline/>}
    />
    )
}


export default CreateCourse;


const CourseOutline = () => {
    const [steps, setSteps] = React.useState([1,2,3,4,4,4,4,4,5,6,7,]);
    const [visible, setVisible] = React.useState(false);

    const addCell = () => {
        setVisible(!visible)
    }

    return(
        <>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',flexWrap:'wrap',rowGap:80,justifyContent:'flex-start',minHeight:500}}>
                {
                    steps.length === 0 ? 
                    <EmptyCell onClick={addCell} />
                    :
                    steps.map((e,i) => {
                        if(i !== steps.length - 1){
                            return(
                                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                    <FillCell />            
                                    <Icon name='arrow-right' size={32} style={{marginLeft:20,marginRight:20}}/>
                                </div>
                            )
                        } else {
                            return(
                                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                    <FillCell />
                                    <Icon name='arrow-right' size={32} style={{marginLeft:20,marginRight:20}}/>
                                    <EmptyCell onClick={addCell} />
                                </div>
                            )
                        }
                    })
                }

            </div>

            <Modal setVisible={setVisible} visible={visible}>
                <GroupButton />
            </Modal>

        </>
    )

}

const GroupButton = () => {
    const [hover, setHover] = React.useState('video');

    return(
        <div style={{borderRadius:5,backgroundColor:'white',boxShadow:'0px 0px 5px 0px rgba(0,0,0,0.5)',display:'flex',flexDirection:'row',alignItems:'center',minWidth:200}}>
            <div onMouseEnter={()=>{setHover('video')}} onMouseLeave={()=>{setHover('')}} style={{borderRadius:5,backgroundColor:hover === 'video' ? '#f1f1f1' : 'transparent',display:'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:30,cursor:'pointer'}}>
                <Icon name='video' size={26} style={{marginBottom:10}}/>
                <p style={{margin:0,padding:0,fontSize:22}}>Video</p>
            </div>

            <div onMouseEnter={()=>setHover('article')} onMouseLeave={()=>setHover('')} style={{borderRadius:5,backgroundColor:hover === 'article' ? '#f1f1f1' : 'transparent',display:'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:30,cursor:'pointer'}}>
                <Icon name='article' size={26} style={{marginBottom:10}}/>
                <p style={{margin:0,padding:0,fontSize:22}}>Article</p>
            </div>
        </div>
    )
}

const EmptyCell = props => {
    const [hover, setHover] = React.useState(false);

    return(
        <button onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onClick={props.onClick} style={{minWidth:250,backgroundColor:hover ? '#f1f1f1' : 'transparent',borderStyle:'dashed',borderRadius:5, cursor:'pointer'}}>
            <Icon name='plus' size={32} color='black' style={{padding:50}}/>
        </button>
    )
}

const FillCell = props => {
    return(
        <div style={{height:150,minWidth:250,borderRadius:10,backgroundColor:'black'}}></div>
    )
}