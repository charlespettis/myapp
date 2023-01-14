import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetItemsByCategoryQuery } from '../app/services/auth';
import VideoPreview from '../components/common/VideoPreview';


const Category = () => {
    
    const params = useParams();
    const {data, isLoading} = useGetItemsByCategoryQuery({type:params.type, id: params.id,offset:0,limit:50});

    console.log(data);

    if(new Object(data).hasOwnProperty(`${params.type}s`)){
        return(
            <div style={{height:'100%',width:'100%',padding:15}}>
                <p style={{textTransform:'uppercase',marginBottom:10,color:'rgba(0,0,0,.75)'}}>{params.type}s</p>
                <p style={{fontSize:32,marginTop:0}}>{data.title}</p>
                <div style={{display:'grid',gridTemplateRows:'repeat(autofill,minmax(100px,1fr))',gridTemplateColumns:'repeat(auto-fill, minmax(300px,1fr) )',rowGap:100,width:'100%',marginTop:20}}>
                    {
                        data[`${params.type}s`].map(e => {
                            return(
                                <Link to={ params.type === 'video' ? `/watch/${e.id}` : `/view/${params.type}/${e.id}`}>
                                    <VideoPreview
                                    icon={e.icon}
                                    title={e.title}
                                    thumbnail={e.thumbnail}
                                    />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    
    return null;
}

export default Category;