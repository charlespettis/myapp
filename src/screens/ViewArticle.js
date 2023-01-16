import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetArticleQuery } from '../app/services/auth';
import ContentLock from '../components/common/ContentLock';
import Editor from '../components/Editor';

const ViewArticle = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useGetArticleQuery(id);
    const date = new Object(data).hasOwnProperty('createdAt') ? new Date(data.createdAt).toLocaleDateString() : null

    if(isError) return <ContentLock />
    return(
        <>
            <span style={{padding:15,marginBottom:0}}>
                {new Object(data).hasOwnProperty('title') && 
                    <p style={{fontSize:22}}>{data.title}</p>
                }

                <p style={{marginBottom:0}}>{date}</p>
            </span>  

            {data?.text &&
                <Editor text={data.text} />
            }
        </>
    )
}

export default ViewArticle;