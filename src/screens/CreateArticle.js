import React from 'react';
import Composer from '../components/common/Composer';
import Editor from '../components/Editor';

const CreateArticle = () => {

    return(
        <Composer
        component={<Editor/>}
        />    
    )
}

export default CreateArticle;