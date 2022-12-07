import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLazySearchQuery } from '../app/services/auth';
import Icon from '../components/common/Icon';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';
import VideoPreview from '../components/common/VideoPreview';

const Search = ({location}) => {
    const state = useLocation();
    const type = state.state?.type;
    const [search, setSearch] = React.useState('');
    const steps = state.state?.steps;
    const navigate = useNavigate();

    const [trigger, result, lastPromiseInfo] = useLazySearchQuery()

    const handleSearch = async () => {
        const params = {
            type,
            search
        }
        try{
            const result = await trigger(params);
        } catch(err){
            console.log(err);
        }
    }

    const handleClick = item => {
        if(steps){
        const newObj = Object.assign({type: type}, item);
        steps.push(newObj);
        navigate('/create/course', { state:{ steps:steps}})
        }

    }
    

    return(
        <div style={{padding:15}}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Icon name='search' size={28}/>
                <input
                onChange={e=>{setSearch(e.currentTarget.value)}}
                onKeyDown={e => {
                    if(e.nativeEvent.key === 'Enter'){
                        handleSearch()
                    }
                }} placeholder='Search something...' type={'text'} style={{paddingTop:5,paddingBottom:5,paddingLeft:5,borderTop:'none',borderLeft:'none',borderRight:'none',fontSize:22,margin:0,padding:0,minWidth:400,minHeight:25,marginLeft:20}} />

            </div>

            {
                result.status === 'fulfilled' && 
                <>
                    {
                    !!result.data[`${type}s`].length &&
                    <Carousel title={`Your ${type}s`} renderData={result.data[`${type}s`]} renderItem={item => {
                        return(
                            <VideoPreview onClick={() => handleClick(item)} icon={item.icon} thumbnail={item.thumbnail} title={item.title} />
                        )
                    }} />
                    }

                    {
                        result.data?.groups.map(group => {
                            return group.categories.map(category => {
                                if(!category[`${{type}}s`]?.length) return null;

                                return(
                                    <Carousel title={category.title} renderData={category[type]} renderItem={item => {
                                        return(
                                            <VideoPreview onClick={() => handleClick(item)} icon={item.icon} thumbnail={item.thumbnail} title={item.title} />
                                        )
                                    }} />
                                    
                                )
                            })
                        })
                    }
                </>
                            
            }
            


        </div>
    )
}

export default Search;