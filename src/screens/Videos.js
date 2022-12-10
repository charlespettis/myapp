import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAllVideosQuery } from '../app/services/auth';
import Carousel from '../components/Carousel';
import Divider from '../components/common/Divider';
import VideoPreview from '../components/common/VideoPreview';

const Videos = () => {
    const {data, isLoading} = useGetAllVideosQuery();

    const renderItem = category => {
        return(
            <Carousel title={category.title} renderData={category.videos} renderItem={item => {
                return(
                <Link to={`/watch/${item.id}`}>
                    <VideoPreview icon={item.icon} thumbnail={item.thumbnail} title={item.title} />
                </Link>
                )
            }} />
        )
    }

    return(
            <Catalog
            renderData={data?.groups}
            renderItem={renderItem}
            />
    )
}

const Catalog = props => {
    return(
        <div style={{display:'flex',flexDirection:'column',overflowY:'scroll'}}>
            {
                props.renderData.map(e => {
                    return e.categories.map(e => {
                        return props.renderItem(e)
                    })
                })
            }
        </div>
    )
}

export default Videos;