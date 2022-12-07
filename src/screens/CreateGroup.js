import React from 'react';
import Composer from '../components/common/Composer';
import { useCreateGroupMutation } from '../app/services/auth';
import {toast} from 'react-toastify';

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
        <div>
            <p>Group Description</p>
            <textarea style={{minHeight:150,minWidth:600}} onChange={e => props.onChange(e.currentTarget.value)}/>
        </div>
    )
}

export default CreateGroup;