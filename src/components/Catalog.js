import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import FullScreenLoader from './common/FullScreenLoader';
import VideoPreview from './common/VideoPreview';

const Catalog = props => {
    const scrollRef = React.useRef();
    const [page,setPage] = React.useState(1);
    const [cachedCategories,setCachedCategories] = React.useState([]);

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom && props.onEndReached) {
            handleEndReached();
         }
    }

    const handleEndReached = async () => {
        const result = await props.onEndReached(page);
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

    const data = cachedCategories.length ? [...getCategoryArray(props.renderData), ...cachedCategories] : getCategoryArray(props.renderData)

    const hasRecents = new Object(props.renderData).hasOwnProperty('recents') && props.renderData.recents.length

    if(props.isLoading) {
        return(         
            <>
                {
                    props.headerComponent
                }

                <FullScreenLoader/>
            </>
        );
    
    }

    if(!data.length && props.renderEmptyComponent) {
        return(         
            <>
                {
                    props.headerComponent
                }

                {props.renderEmptyComponent}
            </>
        );
    }


    return(
        <div onScroll={handleScroll} ref={scrollRef} style={{display:'flex',flexDirection:'column',overflowY:'scroll',paddingBottom:50,gap:30}}>
            {
                props.headerComponent
            }
            {
                hasRecents ? 
                <Carousel
                renderData={props.renderData.recents}
                title='Recently Viewed'
                renderItem={itemraw => {
                    const item = itemraw?.course || itemraw?.article || itemraw?.video
                    const link = props.type === 'video' ? `/watch/${item.id}` : `/view/${props.type}/${item.id}`
                
                    return(
                    <Link to={link}>
                        <VideoPreview icon={item.icon} thumbnail={item.thumbnail} title={item.title} />
                    </Link>
                    )
                }}
                /> : null
            }
            {
                data.map(category => {
                    return props.renderItem(category)
                })   
            }
        </div>
    )
}

export default Catalog;