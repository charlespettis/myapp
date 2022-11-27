import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAllCoursesQuery } from '../app/services/auth';
import Carousel from '../components/Carousel';
import Divider from '../components/common/Divider';
import VideoPreview from '../components/common/VideoPreview';

const Courses = () => {
    const {data, isLoading} = useGetAllCoursesQuery();
    return(
        <div style={{display:'flex',flexDirection:'column'}}>
            {
                data?.groups.map(group => {
                    return group.categories.map(category => {
                        return(
                            <>
                            <Carousel title={category.title} renderData={category.courses} renderItem={item => {
                                return(
                                <Link to={`/view/course/${item.id}`}>
                                    <VideoPreview thumbnail={item.thumbnail} title={item.title} />
                                </Link>
                                )
                            }} />
                            <Divider/>
                            </>
                        )
                    })
                })
            }
            
        </div>
    )
}

export default Courses;