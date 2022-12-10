import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGetUserDetailsQuery } from '../app/services/auth';
import Accordion from '../components/Accordion';
import IconButton from '../components/buttons/IconButton';
import UserItemPreview from '../components/UserItemPreview';

const Create = () => {
    const [fetch, refetch] = React.useState(Date.now());
    const {data, isLoading} = useGetUserDetailsQuery(fetch);
    const renderHeaderComponent = link => (<Link to={link}> <IconButton size={32} name='plus'>Add New</IconButton> </Link>);

    const renderItem = (item, link = null) => (<UserItemPreview link={link} title={item.title} thumbnail={item.thumbnail} createdAt={item.createdAt} id={item.id} status={item.status}/>) 

    return(
            <AccordionGroupContainer>
                <Accordion
                title="My Videos"
                headerComponent={renderHeaderComponent( '/create/video')}
                renderData={data?.videos}
                renderItem={ item => renderItem(item, `/watch/${item.id}`) }
                />

                <Accordion
                title="My Articles"
                headerComponent={renderHeaderComponent('/create/article')}
                renderData={data?.articles}
                renderItem={ item => renderItem(item, `/view/article/${item.id}`) }
                />


                <Accordion
                title="My Courses"
                headerComponent={renderHeaderComponent('/create/course') }
                renderData={data?.courses}
                renderItem={ item => renderItem(item, `/view/course/${item.id}`) }
                />


                <Accordion
                title="My Roadmaps"
                headerComponent={renderHeaderComponent('/create/roadmap')}
                renderData={[{title:'e'}]}
                renderItem={ item => renderItem(item, `/view/roadmap/${item.id}`) }
                />

                <Accordion
                title="My Groups"
                headerComponent={renderHeaderComponent('/create/group') }
                renderData={data?.groups}
                renderItem={ item => renderItem(item) }
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