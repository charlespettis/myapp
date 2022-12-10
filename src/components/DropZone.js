import React from "react";
import { useDropzone } from 'react-dropzone';
import styled from "styled-components";
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
    <DropZoneContainer {...getRootProps()}>
        <input {...getInputProps()} />
        {
        fileDetails? 
        <>
        <Icon name='video-file' size={32}/>
        <p>{fileDetails}</p>
        </>
        :
        <>    
        <Icon name='add' size={26} color={'rgba(0,0,0,.95)'}/>
        {
            isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag and drop a video file here, or click to select one</p>
        }
        </>
        }
    </DropZoneContainer>

    )
}

const DropZoneContainer = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 90px;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-style: dashed;
    border-color: black;
    color: black;
    width: 90%;
    height: 500px;
    border-radius: 10px;
`

export default DropZone;