import React from 'react';
import { useParams } from 'react-router-dom';
import { useManagePendingGroupItemMutation, useCreateCategoryMutation, useDeleteCategoryMutation, useGetPendingGroupItemsQuery } from '../app/services/auth';
import Accordion from '../components/Accordion';
import Icon from '../components/common/Icon';
import {toast} from 'react-toastify';

const EditGroup = () => {
    const {id} = useParams();
    const {data, isLoading, refetch} = useGetPendingGroupItemsQuery(id);

    const [categoryTitle, setCategoryTitle] = React.useState('');
    const [create] = useCreateCategoryMutation();
    const [deleteCategory] = useDeleteCategoryMutation();

    const [manage] = useManagePendingGroupItemMutation();

    const manageItem = async (type, id, action) => {
        const result = await manage({type: type, id: id, action: action})
        if(result.data.success){
            toast('Successfully approved item!');
            refetch()
        }
    }

    const handleCreateCategory = async e => {
        if(e.code === 'Enter'){
            try{
                const result = await create({title: categoryTitle, groupId: id})

                if(result.data.success){
                    toast('Successfully created category!');
                    refetch()
                }
            }catch(err){
                console.log(err);
            }
            setCategoryTitle('')
        }
    }

    const handleDeleteCategory = async id => {
        try{
            const result = await deleteCategory(id);
            if(result.data.success){
                toast('Successfully deleted category!');
                refetch()
            }
        } catch(err){
            console.log(err);
        }
    }

    return(
        <div style={{display:'flex',flex:1,flexDirection:'column',alignItems:'center'}}>
        <div style={{width:'60%',display:'flex',flexDirection:'column',justifyContent:'center',alignSelf:'center',marginTop:0}}>
        <h4>Items pending approval</h4>
        <Accordion
        title="Pending Videos"
        renderData={data?.videos}
        renderItem={item => {
            return(<ItemPreview 
                onApprove={() => manageItem('video',item.id,'approve')}
                onReject={() => manageItem('video',item.id,'reject')}
                title={item.title} 
                thumbnail={item.thumbnail} 
                createdAt={item.createdAt} 
                id={item.id} 
                status={item.status}/>
            )
        }}
        />

        <Accordion
        title="Pending Articles"
        renderData={data?.articles}
        renderItem={item => {
            return(<ItemPreview 
                onApprove={() => manageItem('article',item.id,'approve')}
                onReject={() => manageItem('article',item.id,'reject')}
                title={item.title} 
                thumbnail={item.thumbnail} 
                createdAt={item.createdAt} 
                id={item.id} 
                status={item.status}/>
            )
        }}
        />

        
        <Accordion
        title="Pending Courses"
        renderData={data?.courses}
        renderItem={item => {
            return(<ItemPreview 
                onApprove={() => manageItem('course',item.id,'approve')}
                onReject={() => manageItem('course',item.id,'reject')}
                title={item.title} 
                thumbnail={item.thumbnail} 
                createdAt={item.createdAt} 
                id={item.id} 
                status={item.status}/>
            )
        }}
        />


        {/* <Accordion
        title="Pending Roadmaps"
        renderData={data?.roadmaps}
        renderItem={item => {
            return(<ItemPreview 
                onApprove={() => manageItem('roadmap',item.id,'approve')}
                onReject={() => manageItem('roadmap',item.id,'reject')}
                title={item.title} 
                thumbnail={item.thumbnail} 
                createdAt={item.createdAt} 
                id={item.id} 
                status={item.status}/>
            )
        }}
        /> */}

        <h4 style={{alignSelf:'flex-start'}}>Categories</h4>
        <input value={categoryTitle} onChange={e => setCategoryTitle(e.currentTarget.value)} onKeyDown={handleCreateCategory} placeholder='Enter title'  type='text' style={{maxWidth:300,marginBottom:10}} />
        {
            Array.isArray(data?.categories) && data.categories.map(e => {
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
                <Icon onClick={props.onApprove} name='check' color='green' size={24} style={{marginRight:10}}/>    
                <Icon onClick={props.onReject} name='close' color='red' size={24} />    

            </div>

        </div>
    )
}

export default EditGroup;