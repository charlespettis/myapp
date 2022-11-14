import React from 'react';
import Accordion from '../components/Accordion';

const Create = () => {

    return(
        <div style={{display:'flex',flex:1,flexDirection:'column',alignItems:'center'}}>
        <div style={{width:'60%',display:'flex',flexDirection:'column',justifyContent:'center',alignSelf:'center',marginTop:0}}>
        <Accordion
        title="My Videos"
        renderData={[{title:'e'}]}
        renderItem={item => {return(<p>{item.title}</p>)}}
        />
        
        <Accordion
        title="My Courses"
        renderData={[{title:'e'}]}
        renderItem={item => {return(<p>{item.title}</p>)}}
        />


        <Accordion
        title="My Roadmaps"
        renderData={[{title:'e'}]}
        renderItem={item => {return(<p>{item.title}</p>)}}
        />

        <Accordion
        title="My Groups"
        renderData={[{title:'e'}]}
        renderItem={item => {return(<p>{item.title}</p>)}}
        />

        </div>
        </div>
    )
}

export default Create;