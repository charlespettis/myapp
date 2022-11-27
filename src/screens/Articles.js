import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAllArticlesQuery } from '../app/services/auth';
import Carousel from '../components/Carousel';
import Divider from '../components/common/Divider';
import VideoPreview from '../components/common/VideoPreview';

const Articles = () => {
    const {data, isLoading} = useGetAllArticlesQuery();
    console.log(data);
    return(
        <div style={{display:'flex',flexDirection:'column'}}>
            {
                data?.groups.map(group => {
                    return group.categories.map(category => {
                        return(
                            <>
                            <Carousel title={category.title} renderData={category.articles} renderItem={item => {
                            return(
                                <Link to={`/view/article/${item.id}`}>
                                    <VideoPreview type={'ARTICLE'} icon={item.icon} thumbnail={item.thumbnail} title={item.title} />
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

export default Articles;