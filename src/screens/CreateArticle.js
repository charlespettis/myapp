import React from 'react';
import Composer from '../components/common/Composer';
import Editor from '../components/Editor';
import { useCreateArticleMutation } from '../app/services/auth';
import {toast} from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const CreateArticle = () => {
    const [create, {isLoading}] = useCreateArticleMutation();
    const [text,setText] = React.useState('');
    const state = useLocation();
    const steps = state.state?.steps;

    const navigate = useNavigate();

    const submit = async data => {
        const body = {
            ...data,
            text: text
        }

        const result = await create(body);
        if(result.data && steps){
            const newObj = Object.assign({type: 'article'}, result.data);
            console.log(newObj);
            steps.push(newObj);
            navigate('/create/course', { state:{ steps:steps}})
        }
        toast('Successfully created article')

    }

    return(
        <Composer
        onSubmit={submit}
        noPlacement={steps}
        component={<Editor
        onChange={e => setText(e)}
        />}
        />    
    )
}

export default CreateArticle;