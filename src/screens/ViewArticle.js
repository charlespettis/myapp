import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetArticleQuery } from '../app/services/auth';
import Editor from '../components/Editor';

const ViewArticle = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useGetArticleQuery(id);
    console.log(data);

    return(
        <>
    {data?.text &&
        <Editor text={data.text} />
    }
        </>
    )
}

export default ViewArticle;