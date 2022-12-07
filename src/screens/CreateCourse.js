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
    const roadmapSteps = state.state?.steps;
    const navigate = useNavigate()


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

        if(steps){
            const newObj = Object.assign({type: 'course'}, result.data.dataValues);
            roadmapSteps.push(newObj);
            navigate('/create/roadmap', { state:{ steps:steps}})

        }


    }

    return(
    <Composer
    onSubmit={handleSubmit}
    noPlacement={roadmapSteps}
    component={<CourseOutline
    onChange={e=>{setSteps(e)}}
    />}
    />
    )
}


export default CreateCourse;

