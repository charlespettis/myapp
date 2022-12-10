import React from 'react';
import { useParams } from 'react-router-dom';
import { useApprovePendingGroupItemMutation, useCreateCategoryMutation, useDeleteCategoryMutation, useGetPendingGroupItemsQuery } from '../app/services/auth';
import Accordion from '../components/Accordion';
import Icon from '../components/common/Icon';
import {toast} from 'react-toastify';

const EditGroup = () => {
    const {id} = useParams();
    const {data, isLoading} = useGetPendingGroupItemsQuery(id);
    const [categoryTitle, setCategoryTitle] = React.useState('');
    const [create] = useCreateCategoryMutation();
    const [deleteCategory] = useDeleteCategoryMutation();

    const handleCreateCategory = async e => {
        if(e.code === 'Enter'){
            
            const result = create({title: categoryTitle, groupId: id})
            toast.promise(result, {
                success: 'Successfully created category',
                pending:  'Creating category',
                error: 'Something went wrong. Please try again later.'
            })

        }
    }

    const renderItem = item => {
        return(<ItemPreview title={item.title} thumbnail={item.thumbnail} createdAt={item.createdAt} id={item.id} status={item.status}/>)
    }

    const handleDeleteCategory = async id => {
        const result = deleteCategory(id);
        toast.promise(result,
            {
                success:'Successfully deleted category',
                pending: 'Deleting category',
                error:'There was a problem deleting this category. Please try again.'
            })
    }

    return(
        <div style={{display:'flex',flex:1,flexDirection:'column',alignItems:'center'}}>
        <div style={{width:'60%',display:'flex',flexDirection:'column',justifyContent:'center',alignSelf:'center',marginTop:0}}>
        <h4>Items pending approval</h4>
        <Accordion
        title="Pending Videos"
        renderData={data?.videos}
        renderItem={renderItem}
        />

        <Accordion
        title="Pending Articles"
        renderData={data?.articles}
        renderItem={renderItem}
        />

        
        <Accordion
        title="Pending Courses"
        renderData={data?.courses}
        renderItem={renderItem}
        />


        <Accordion
        title="Pending Roadmaps"
        renderData={data?.roadmaps}
        renderItem={renderItem}
        />

        <h4 style={{alignSelf:'flex-start'}}>Categories</h4>
        <input onChange={e => setCategoryTitle(e.currentTarget.value)} onKeyDown={handleCreateCategory} placeholder='Enter title'  type='text' style={{maxWidth:300,marginBottom:10}} />
        {
            data?.categories?.length && data.categories.map(e => {
                return(
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginBottom:10}}>
                        <input disabled value={e.title} type='text' style={{marginRight:5,width:300,}}/>
                        <Icon onClick={() => handleDeleteCategory(e.id)} name='close' />
                    </div>

                )
            })
        }

        </div>

        </div>

    )
}

const ItemPreview = props => {

    const [approve, {isLoading}] = useApprovePendingGroupItemMutation();

    const approveVideo = async () => {
        const result = await approve({type: 'video', id: props.id})
        if(result.data){
            toast('Successfully approved video!');
        }
    }


    return(
        <div style={{display:'flex', flexDirection:'row',alignItems:'center',marginTop:10,justifyContent:'space-between'}}>

            <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{width:150,height:75,background: props.thumbnail, borderRadius:5}} />

            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',marginLeft:10}}>
                <p style={{marginBottom:0}}>{props.title}</p>
                <p style={{marginTop:0}}>{new Date(props.createdAt).toLocaleDateString()}</p>
            </div>
            </div>

            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Icon onClick={approveVideo} name='check' color='green' size={24} style={{marginRight:10}}/>    
                <Icon name='close' color='red' size={24} />    

            </div>

        </div>
    )
}

export default EditGroup;