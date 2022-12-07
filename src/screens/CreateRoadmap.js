import React from 'react';
import Composer from '../components/common/Composer';
import { useCreateRoadmapMutation } from '../app/services/auth';
import CourseOutline from '../components/CourseOutline';

const CreateRoadmap = () => {
    const [steps, setSteps] = React.useState([]);
    const [create, {isLoading}] = useCreateRoadmapMutation()
    const handleSubmit = async data => {

        const body = {
            ...data,
            videos:[],
            articles:[],
            courses: []
        }
        
        steps.map((e,i) => {
            if(e.type === 'article'){
                body.articles.push({order: i + 1, id:e.id});
            }
            if(e.type === 'video'){
                body.videos.push({order:i + 1, id:e.id});
            }
            if(e.type === 'course'){
                body.courses.push({order:i + 1, id:e.id});
            }

        })

        const result = await create(body);


    }

    return(
    <Composer
    onSubmit={handleSubmit}
    component={<CourseOutline
    roadmap
    onChange={e=>{setSteps(e)}}
    />}
    />
    )
}


export default CreateRoadmap;

