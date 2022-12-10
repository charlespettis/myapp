import React from 'react';
import Composer from '../components/common/Composer';
import { useCreateGroupMutation } from '../app/services/auth';
import {toast} from 'react-toastify';
import Icon from '../components/common/Icon';

const CreateGroup = () => {
    const [create, {isLoading}] = useCreateGroupMutation();
    const [description, setDescription] = React.useState('');

    const submit = async data => {
        const body = {
            description,
            ...data,
        }

        const result = create(body);
        toast.promise(
            result,
            {
              pending: 'Creating group...',
              success: 'Group created! 👍',
              error: 'There was a problem creating your group. Please try again later.'
            })
    }

    return(
        <Composer
        onSubmit={submit}
        noPlacement
        component={<GroupEditor
        onChange={e => setDescription(e)}
        />}
        />     
    )
}

const GroupEditor = props => {
    return(
        <div style={{paddingTop:20,width:'100%'}}>
            <Icon name='users' size={64} color={'rgba(0,0,0,.75)'}/>
            <h3>Hosting your Community on SkillCenter</h3>
            <p>By default, all users belong to our "Public" group. That way, SkillCenter moderators can review submitted items and approve quality content and reject submissions that do not meet our posting criteria.  Here, you can create your own group that users can join and submit content to that you moderate.</p>
            <p>Group Description</p>
            <textarea style={{minHeight:150,minWidth:600}} onChange={e => props.onChange(e.currentTarget.value)}/>
        </div>
    )
}

export default CreateGroup;