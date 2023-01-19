import React from 'react';
import Composer from '../components/common/Composer';
import { useCreateCourseMutation } from '../app/services/auth';
import CourseOutline from '../components/CourseOutline';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const CreateCourse = () => {
    const [steps, setSteps] = React.useState([]);
    const [create, {isLoading}] = useCreateCourseMutation()
    const state = useLocation();


    const handleSubmit = async data => {

        if(steps.length < 2){
            toast('Please add atleast 2 items to your course.', {type: 'error'});
            return;
        }

        const body = {
            ...data,
            videos:[],
            articles:[]
        }
        
        steps.map((e,i) => {
            if(e.type === 'article'){
                body.articles.push({order: i + 1, id:e.id});
            }
            if(e.type === 'video'){
                body.videos.push({order:i + 1, id:e.id});
            }
        })

        try{
            await create(body);
        } catch(err){
            toast(new Error(err).message, {type: 'error'});
        }


    }

    return(
    <Composer
    loading={isLoading}
    onSubmit={handleSubmit}
    component={<CourseOutline
    onChange={e=>{setSteps(e)}}
    />}
    />
    )
}


export default CreateCourse;

