import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAllVideosQuery } from '../app/services/auth';
import Carousel from '../components/Carousel';
import Divider from '../components/common/Divider';
import VideoPreview from '../components/common/VideoPreview';

const Videos = () => {
    const {data, isLoading} = useGetAllVideosQuery();
    return(
        <div style={{display:'flex',flexDirection:'column',overflowY:'scroll'}}>
            {
                data?.groups.map(group => {
                    return group.categories.map(category => {
                        return(
                            <>
                            <Carousel title={category.title} renderData={category.videos} renderItem={item => {
                                return(
                                <Link to={`/watch/${item.id}`}>
                                    <VideoPreview icon={item.icon} thumbnail={item.thumbnail} title={item.title} />
                                </Link>
                                )
                            }} />
                            <Divider/>
                            <Carousel title={category.title} renderData={category.videos} renderItem={item => {
                                return(
                                <Link to={`/watch/${item.id}`}>
                                    <VideoPreview thumbnail={item.thumbnail} title={item.title} />
                                </Link>
                                )
                            }} />
                            <Divider/>
                            <Carousel title={category.title} renderData={category.videos} renderItem={item => {
                                return(
                                <Link to={`/watch/${item.id}`}>
                                    <VideoPreview thumbnail={item.thumbnail} title={item.title} />
                                </Link>
                                )
                            }} />
                            <Divider/>
                            <Carousel title={category.title} renderData={category.videos} renderItem={item => {
                                return(
                                <Link to={`/watch/${item.id}`}>
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

export default Videos;