import React from 'react';
import { Link } from 'react-router-dom';
import { useGetUserDetailsQuery } from '../app/services/auth';
import Accordion from '../components/Accordion';
import Icon from '../components/common/Icon';

const Create = () => {
    const {data, isLoading} = useGetUserDetailsQuery();

    const renderItem = item => {
        return(<ItemPreview title={item.title} thumbnail={item.thumbnail} createdAt={item.createdAt} id={item.id} status={item.status}/>)
    }

    return(
        <div style={{display:'flex',flex:1,flexDirection:'column',alignItems:'center',overflowY:'scroll'}}>
        <div style={{width:'50%',display:'flex',flexDirection:'column',justifyContent:'center',alignSelf:'center',marginTop:0}}>
        <Accordion
        title="My Videos"
        headerComponent={
            <Link to='/create/video'>
            <button>Add New</button>
            </Link>
        }
        renderData={data?.videos}
        renderItem={ item => {
            return(<ItemPreview link={`/watch/${item.id}`} title={item.title} thumbnail={item.thumbnail} createdAt={item.createdAt} id={item.id} status={item.status}/>)
        }}
        />

        <Accordion
        title="My Articles"
        headerComponent={
            <Link to='/create/article'>
            <button>Add New</button>
            </Link>
        }
        renderData={data?.articles}
        renderItem={item => {
            return(<ItemPreview link={`/view/article/${item.id}`} title={item.title} thumbnail={item.thumbnail} createdAt={item.createdAt} id={item.id} status={item.status}/>)
        }}
        />


        <Accordion
        title="My Courses"
        headerComponent={
            <Link to='/create/course'>
            <button>Add New</button>
            </Link>
        }
        renderData={data?.courses}
        renderItem={item => {
            return(<ItemPreview link={`/view/course/${item.id}`} title={item.title} thumbnail={item.thumbnail} createdAt={item.createdAt} id={item.id} status={item.status}/>)
        }}
        />


        <Accordion
        title="My Roadmaps"
        headerComponent={
            <Link to='/create/roadmap'>
            <button>Add New</button>
            </Link>
        }

        renderData={[{title:'e'}]}
        renderItem={item => {return(<p>{item.title}</p>)}}
        />

        <Accordion
        title="My Groups"
        headerComponent={
            <Link to='/create/group'>
            <button>Add New</button>
            </Link>
        }
        renderData={data?.groups}
        renderItem={renderItem}
        />

        </div>
        </div>
    )
}

const ItemPreview = props => {

    const statusColors = {
        pending: 'darkorange',
        rejected: 'red',
        approved: 'green'
    }

    return(
        <div style={{display:'flex', flexDirection:'row',alignItems:'center',marginTop:10,justifyContent:'space-between'}}>

            <div style={{display:'flex',flexDirection:'row'}}>
            <Link to={props.link}>
            <div style={{width:150,height:75,background: props.thumbnail, borderRadius:5}} />
            </Link>

            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',marginLeft:10}}>
                <p style={{marginBottom:0}}>{props.title}</p>
                <p style={{marginTop:0}}>{new Date(props.createdAt).toLocaleDateString()}</p>
            </div>
            </div>

            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <p style={{color: statusColors[props.status], marginRight:10}}>{props.status?.toUpperCase()}</p>
                <Link to={`/edit/group/${props.id}`}>
                <Icon name='gear' size={22} style={{marginRight:10}}/>    
                </Link>
                <Icon name='trash' color='red' size={22} />    

            </div>

        </div>
    )
}

export default Create;