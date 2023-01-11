import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDeleteUserItemMutation, useGetUserDetailsQuery } from '../app/services/auth';
import Accordion from '../components/Accordion';
import Alert from '../components/Alert';
import IconButton from '../components/buttons/IconButton';
import UserItemPreview from '../components/UserItemPreview';

const Create = () => {
    const [fetch, _refetch] = React.useState(Date.now());
    const refetch = () => _refetch(Date.now());
    const {data, isLoading} = useGetUserDetailsQuery(fetch);
    const [deleteUserItem] = useDeleteUserItemMutation();

    const alert = React.useContext(Alert);


    const handleDeleteItem = async (id,type) => {
        alert({
            title: 'Warning', 
            message: 'You are about to permanently delete this item.. Are you sure you\'d like to continue?',
            buttons: [
                {
                    label: 'Cancel',
                    type: 'cancel',
                    onClick: () => {}
                },
                {
                    label: 'Yes, Delete this item',
                    type: 'delete',
                    onClick: async () => {
                        try{
                            const result = await deleteUserItem({type: type, id: id});
                            if(result.data.success){
                                refetch();
                            }
                        }catch(err){
                            console.log(err);
                        }

                    }
                },

            ]
        })
    }

    const renderHeaderComponent = link => (<Link to={link}> <IconButton size={32} name='plus'>Add New</IconButton> </Link>);


    return(
            <AccordionGroupContainer>
                <Accordion
                title="My Videos"
                headerComponent={renderHeaderComponent( '/create/video')}
                renderData={data?.videos}
                renderItem={ item => 
                    <UserItemPreview 
                    link={`/watch/${item.id}`} 
                    title={item.title} 
                    thumbnail={item.thumbnail} 
                    createdAt={item.createdAt} 
                    id={item.id}
                    onDelete={ () => handleDeleteItem(item.id, 'video') }
                    status={item.status}/>
                }
                />
                <Accordion
                title="My Articles"
                headerComponent={renderHeaderComponent('/create/article')}
                renderData={data?.articles}
                renderItem={ item => 
                    <UserItemPreview 
                    link={`/view/article/${item.id}`} 
                    title={item.title} 
                    thumbnail={item.thumbnail} 
                    createdAt={item.createdAt} 
                    id={item.id} 
                    onDelete={ () => handleDeleteItem(item.id, 'article') }
                    status={item.status}/>
                }
                />


                <Accordion
                title="My Courses"
                headerComponent={renderHeaderComponent('/create/course') }
                renderData={data?.courses}
                renderItem={ item => 
                    <UserItemPreview 
                    link={`/view/course/${item.id}`} 
                    title={item.title} 
                    thumbnail={item.thumbnail} 
                    createdAt={item.createdAt} 
                    id={item.id} 
                    onDelete={ () => handleDeleteItem(item.id, 'course') }
                    status={item.status}/>
                }
                />


                {/* {<Accordion
                title="My Roadmaps"
                headerComponent={renderHeaderComponent('/create/roadmap')}
                renderData={data?.roadmaps}
                renderItem={ item => 
                    <UserItemPreview 
                    link={`/view/roadmap/${item.id}`} 
                    title={item.title} 
                    thumbnail={item.thumbnail} 
                    createdAt={item.createdAt} 
                    id={item.id} 
                    onDelete={ () => handleDeleteItem(item.id, 'roadmap') }
                    status={item.status}/>
                }

                />} */}

                <Accordion
                title="My Groups"
                headerComponent={renderHeaderComponent('/create/group') }
                renderData={data?.groups}

                renderItem={ item => 
                    <UserItemPreview 
                    edit
                    link={`/view/roadmap/${item.id}`} 
                    title={item.title} 
                    thumbnail={item.thumbnail} 
                    createdAt={item.createdAt} 
                    id={item.id} 
                    status={item.status}
                    onDelete={ () => handleDeleteItem(item.id, 'group') }

                    />
                }
                />

            </AccordionGroupContainer>    
    )
}

const AccordionGroupContainer = styled.div`
    width:60%;
    display:flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    margin-top:0;
`


export default Create;