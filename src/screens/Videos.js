import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAllVideosQuery, useLazyGetAllVideosQuery, useLazyGetMoreVideosQuery } from '../app/services/auth';
import Carousel from '../components/Carousel';
import Banner from '../components/common/Banner';
import VideoPreview from '../components/common/VideoPreview';

const Videos = () => {
    const [page,setPage] = React.useState(1);
    const {data, isLoading} = useGetAllVideosQuery();
    const [refetch] = useLazyGetAllVideosQuery(); 
    const [trigger, result, lastPromiseInfo] = useLazyGetMoreVideosQuery();
    const [loadedData, setLoadedData] = React.useState({});
    const [cachedCategories,setCachedCategories] = React.useState([]);
    const [carouselPage, setCarouselPage] = React.useState(1);

    const handleCarouslEndReached = async (id) => {

        const result = await trigger({id: id, offset:carouselPage * 15});


        setLoadedData(prevState => ({
                ...prevState,
                [id]: prevState[id]?.length ? [...prevState[id], ...result.data.videos] : [...result.data.videos]

        }))

        setCarouselPage(carouselPage + 1);

    }

    const renderItem = category => {
        return(
            <Carousel 
            onEndReached={() => handleCarouslEndReached(category.id)} 
            title={category.title} 
            renderData={loadedData[category.id]?.length ? [...category.videos, ...loadedData[category.id] ] : [...category.videos]} 
            renderItem={item => {
                return(
                <Link to={`/watch/${item.id}`}>
                    <VideoPreview icon={item.icon} thumbnail={item.thumbnail} title={item.title} />
                </Link>
                )
            }} />
        )
    }

    const handleScrollBottom = async () => {
        const result = await refetch({offset: page * 3});
        const array = getCategoryArray(result.data);
        setCachedCategories(prevState => {
            return [
                ...prevState,
                ...array
            ]
        })
        setPage(page + 1);

    }

    const getCategoryArray = data => {
        const result = [];
        if(data?.groups?.length){
            data.groups.forEach(e => {
                e.categories.forEach(ee=>{
                    result.push(ee);
                })
            })
        }

        return result;
    }

    return(
            <Catalog
            headerComponent = {
                <Banner src='https://t4.ftcdn.net/jpg/04/12/28/57/360_F_412285721_90ZrZh1OmVtBRlZNUanHxebY242e6qo6.jpg'/>
            }
            onEndReached={handleScrollBottom}
            renderData={ cachedCategories.length ? [...getCategoryArray(data), ...cachedCategories] : getCategoryArray(data)}
            renderItem={renderItem}
            />
    )
}

const Catalog = props => {
    const scrollRef = React.useRef();

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            props.onEndReached();
         }
      }
    
    return(
        <div onScroll={handleScroll} ref={scrollRef} style={{display:'flex',flexDirection:'column',overflowY:'scroll',paddingBottom:50,gap:30}}>
            {
                props.headerComponent
            }
            {
                props?.renderData?.length && props.renderData.map(category => {
                    return props.renderItem(category)
                })   
            }
        </div>
    )
}

export default Videos;