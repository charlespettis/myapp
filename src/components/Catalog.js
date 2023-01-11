import React from 'react';

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


    return(
        <div onScroll={handleScroll} ref={scrollRef} style={{display:'flex',flexDirection:'column',overflowY:'scroll',paddingBottom:50,gap:30}}>
            {
                props.headerComponent
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