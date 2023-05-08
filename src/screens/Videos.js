import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCategoriesByTypeQuery, useLazyGetCategoriesByTypeQuery, useLazyGetItemsByCategoryQuery } from '../app/services/auth';
import Carousel from '../components/Carousel';
import Banner from '../components/common/Banner';
import VideoPreview from '../components/common/VideoPreview';
import Catalog from '../components/Catalog';
import Empty from '../components/common/Empty';

const Videos = () => {
    const {data, isLoading} = useGetCategoriesByTypeQuery({type:'video'});
    const [refetch] = useLazyGetCategoriesByTypeQuery(); 
    const [trigger, result, lastPromiseInfo] = useLazyGetItemsByCategoryQuery();

    const renderItem = category => {
        return(
            <Carousel 
            onEndReached={page => trigger({id: category.id, offset: page * 15, type: 'video'})} 
            title={category.title}
            seeMore={`/category/${category.id}/video`}
            renderData={category.videos}
            renderItem={item => {
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
            type='video'
            renderEmptyComponent={<Empty/>}
            headerComponent = {
                <Banner src={require('../assets/images/videos-header.jpg')}>
                    <Banner.BottomLeftHeader>Videos</Banner.BottomLeftHeader>
                </Banner>
            }
            isLoading={isLoading}
            onEndReached={page => refetch({offset: page * 3, type: 'video'})}
            renderData={data}
            renderItem={renderItem}
            />
    )
}


export default Videos;