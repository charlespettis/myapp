import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCourseQuery } from '../app/services/auth';
import VideoPreview from '../components/common/VideoPreview';

const ViewCourse = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useGetCourseQuery(id);
    console.log(data);

    return(
        <>
        <div style={{display:'flex',flexDirection:'row',alignItems:'flex-start',width:'100%',flexWrap:'wrap',rowGap:50,overflowY:'scroll'}}>
                {
                    data &&
                    [...data.Article_Courses, ...data.Video_Courses].sort((a,b) => {return a.order - b.order}).map((e) => {
                            return(
                                    <VideoPreview title={e.title} thumbnail={e.thumbnail} icon={e.icon}/>       
                            )
                    })
                }

            </div>

        </>
    )
}

export default ViewCourse;