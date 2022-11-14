import React from "react";
import { useDropzone } from 'react-dropzone';
import Icon from "./common/Icon";

const DropZone = () => {

    const onDrop = React.useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    

    return(
    <div style={{alignSelf:'center',display:'flex',flexDirection:'column',marginBottom:90,alignItems:'center',justifyContent:'center',borderWidth:1,borderStyle:'dashed',borderColor:'black',color:'black',width:'60%',height:400,borderRadius:10}} {...getRootProps()}>
        <input accept='video' {...getInputProps()} />
        <Icon name='add' size={26} style={{color:'rgba(0,0,0,.95)'}}/>
        {
            isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag and drop a video file here, or click to select one</p>
        }
    </div>

    )
}

export default DropZone;