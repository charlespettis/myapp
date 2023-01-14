import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetCourseQuery } from '../app/services/auth';
import VideoPreview from '../components/common/VideoPreview';

const ViewCourse = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useGetCourseQuery(id);
    console.log(data);

    return(
        <div style={{padding:15}}>
            <div style={{display:'grid',gridTemplateRows:'repeat(autofill,minmax(100px,1fr))',gridTemplateColumns:'repeat(auto-fill, minmax(250px,1fr) )',rowGap:100,width:'100%',marginTop:20}}>
                {
                    data &&
                    [...data.Article_Courses, ...data.Video_Courses].sort((a,b) => {return a.order - b.order}).map((e) => {
                        let item = {title: '', thumbnail: '', icon: '', link:''};
                        if(new Object(e).hasOwnProperty('article')) {
                            item = {
                                ...e.article,
                                link: `/view/article/${e.article.id}`,
                                type: 'article'
                            }
                        }
                        if(new Object(e).hasOwnProperty('video')) {
                            item = {
                                ...e.video,
                                link: `/view/article/${e.article.id}`,
                                type: 'video'
                            }

                        };

                        return(
                            <Link to={item.link}>
                                <VideoPreview type={item.type} title={item.title} thumbnail={item.thumbnail} icon={item.icon}/> 
                            </Link>      
                        )
                    })
                }

            </div>

        </div>
    )
}

export default ViewCourse;