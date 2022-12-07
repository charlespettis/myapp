import React from "react";
import { useDropzone } from 'react-dropzone';
import Icon from "./common/Icon";

const DropZone = props => {

    const [fileDetails,setFileDetails] = React.useState(null);

    const onDrop = React.useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const formData = new FormData();
        setFileDetails(file.name)
        formData.append('file', file);
        props.onChange(file);
      }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: {'video/*' : ['.webm', '.mp4', '.mov', '.avi']}})
    

    return(
    <div style={{alignSelf:'center',display:'flex',flexDirection:'column',marginBottom:90,alignItems:'center',justifyContent:'center',borderWidth:1,borderStyle:'dashed',borderColor:'black',color:'black',width:'90%',height:500,borderRadius:10}} {...getRootProps()}>
        <input {...getInputProps()} />
        {
        fileDetails? 
        <>
        <Icon name='video-file' size={32}/>
        <p>{fileDetails}</p>
        </>
        :
        <>    
        <Icon name='add' size={26} style={{color:'rgba(0,0,0,.95)'}}/>
        {
            isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag and drop a video file here, or click to select one</p>
        }
        </>
        }
    </div>

    )
}

export default DropZone;