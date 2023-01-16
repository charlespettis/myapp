import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCategoriesByTypeQuery, useLazyGetCategoriesByTypeQuery, useLazyGetItemsByCategoryQuery } from '../app/services/auth';
import Carousel from '../components/Carousel';
import Banner from '../components/common/Banner';
import VideoPreview from '../components/common/VideoPreview';
import Catalog from '../components/Catalog';

const Courses = () => {
    const {data, isLoading} = useGetCategoriesByTypeQuery({type:'course'});
    const [refetch] = useLazyGetCategoriesByTypeQuery(); 
    const [trigger, result, lastPromiseInfo] = useLazyGetItemsByCategoryQuery();

    const renderItem = category => {
        return(
            <Carousel 
            onEndReached={page => trigger({id: category.id, offset: page * 15, type: 'course'})} 
            title={category.title} 
            seeMore={`/category/${category.id}/course`}
            renderData={category.courses}
            renderItem={item => {
                return(
                <Link to={`/view/course/${item.id}`}>
                    <VideoPreview icon={item.icon} thumbnail={item.thumbnail} title={item.title} />
                </Link>
                )
            }} />
        )
    }

    return(
            <Catalog
            headerComponent = {
                <Banner src={require('../assets/images/courses-header.jpg')}>
                    <Banner.BottomLeftHeader>Courses</Banner.BottomLeftHeader>
                </Banner>
            }
            onEndReached={page => refetch({offset: page * 3, type: 'course'})}
            renderData={data}
            renderItem={renderItem}
            />
    )
}

export default Courses;
