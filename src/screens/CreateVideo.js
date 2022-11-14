import React from 'react';
import ScreenRecorder from '../components/ScreenRecorder';
import DropZone from '../components/DropZone';
import Composer from '../components/common/Composer';

const CreateVideo = () => {
    return(
        <>
        <Composer
        component={<Record/>}
        />

        </>


    )
}

const Record = () => {
    const [type,setType] = React.useState('record');

    return(
        <>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginBottom:10,alignSelf:'center'}}>
                <p onClick={()=>setType('record')} style={{color:type === 'record' ? 'black' : 'rgba(0,0,0,.8)',fontSize:20,fontWeight:type === 'record' ? 600 : 400}}>Record</p> 
                <span style={{margin:'0px 10px',height:'50%',width:1,backgroundColor:'rgba(0,0,0,.25)'}}/> 
                <p onClick={()=>setType('upload')} style={{fontWeight:type === 'upload' ? 600 : 400,color:type === 'upload' ? 'black' : 'rgba(0,0,0,.8)',fontSize:20}}>Upload</p>
            </div>
            
            {
            type === 'record' ?
            <ScreenRecorder />
            :
            <DropZone />
            }
            
        </>
    )
}


export default CreateVideo;