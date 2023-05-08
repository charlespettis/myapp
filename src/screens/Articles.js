import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCategoriesByTypeQuery, useLazyGetCategoriesByTypeQuery, useLazyGetItemsByCategoryQuery } from '../app/services/auth';
import Carousel from '../components/Carousel';
import Banner from '../components/common/Banner';
import VideoPreview from '../components/common/VideoPreview';
import Catalog from '../components/Catalog';
import Empty from '../components/common/Empty';

const Articles = () => {
    const {data, isLoading} = useGetCategoriesByTypeQuery({type:'article'});
    const [refetch] = useLazyGetCategoriesByTypeQuery(); 
    const [trigger, result, lastPromiseInfo] = useLazyGetItemsByCategoryQuery();

    const renderItem = category => {
        return(
            <Carousel 
            onEndReached={page => trigger({id: category.id, offset: page * 15, type: 'article'})} 
            title={category.title} 
            seeMore={`/category/${category.id}/article`}
            renderData={category.articles}
            renderItem={item => {
                return(
                <Link to={`/view/article/${item.id}`}>
                    <VideoPreview icon={item.icon} thumbnail={item.thumbnail} title={item.title} />
                </Link>
                )
            }} />
        )
    }

    return(
            <Catalog
            type='article'
            renderEmptyComponent={<Empty/>}
            headerComponent = {
                <Banner src={require('../assets/images/articles-header.jpg')}>
                    <Banner.BottomLeftHeader>Articles</Banner.BottomLeftHeader>
                </Banner>
            }
            isLoading={isLoading}
            onEndReached={page => refetch({offset: page * 3, type: 'article'})}
            renderData={data}
            renderItem={renderItem}
            />
    )
}

export default Articles;