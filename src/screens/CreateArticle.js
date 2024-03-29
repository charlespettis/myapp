import React from 'react';
import Composer from '../components/common/Composer';
import Editor from '../components/Editor';
import { useCreateArticleMutation } from '../app/services/auth';
import {toast} from 'react-toastify';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const CreateArticle = () => {
    const {id} = useParams();
    const [create, {isLoading}] = useCreateArticleMutation();
    const [text,setText] = React.useState('');
    const state = useLocation();
    const steps = state.state?.steps;

    const navigate = useNavigate();

    const submit = async data => {
        if(!text.length){
            toast('Please write your article before publishing', {type: 'error'})
            return;
        }

        const body = {
            ...data,
            text: text
        }

        try{
            const result = await create(body);


            if(steps){
                const newObj = Object.assign({type: 'article'}, result.data);
                console.log(newObj);
                steps.push(newObj);
                navigate('/create/course', { state:{ steps:steps}})
            } else {
                navigate(-1);
            }
            toast('Successfully created article')
        } catch(err){
            toast(new Error(err).message, {type: 'error'});
        }
    }

    const handleSaveDraft = async () => {
        if(!text.length){
            toast('Please write your article before saving a draft.');
            return;
        }
    }

    return(
        <Composer
        onSaveDraft={handleSaveDraft}
        allowDrafts={true}
        onSubmit={submit}
        loading={isLoading}
        noPlacement={steps}
        component={<Editor contentStyle={{overflowY:'scroll'}}
        onChange={e => setText(e)}
        />}
        />    
    )
}

export default CreateArticle;