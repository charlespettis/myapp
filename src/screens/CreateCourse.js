import React from 'react';
import Composer from '../components/common/Composer';
import { useCreateCourseMutation } from '../app/services/auth';
import CourseOutline from '../components/CourseOutline';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const CreateCourse = () => {
    const [steps, setSteps] = React.useState([]);
    const [create, {isLoading}] = useCreateCourseMutation()
    const state = useLocation();


    const handleSubmit = async data => {

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
        console.log(body);

        const result = await create(body);


    }

    return(
    <Composer
    onSubmit={handleSubmit}
    component={<CourseOutline
    onChange={e=>{setSteps(e)}}
    />}
    />
    )
}


export default CreateCourse;

