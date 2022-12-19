import React from 'react';
import Videos from '../screens/Videos';
import SideNav from '../components/navs/SideNav';
import Courses from '../screens/Courses';
import Create from '../screens/Create';
import Groups from '../screens/Groups';
import CreateCourse from '../screens/CreateCourse';
import CreateArticle from '../screens/CreateArticle';
import CreateVideo from '../screens/CreateVideo';
import EditGroup from '../screens/EditGroup';
import Articles from '../screens/Articles';
import ViewArticle from '../screens/ViewArticle';
import ViewCourse from '../screens/ViewCourse';
import Search from '../screens/Search';
import CreateRoadmap from '../screens/CreateRoadmap';
import CreateGroup from '../screens/CreateGroup';
import Billing from '../screens/Billing';

const Home = () => {
    return(
        <SideNav
        headerComponent={<Logo/>}
        >

        <SideNav.Screen
        icon='video'
        label='Videos'
        path='/'
        element={<Videos />}
        />

        <SideNav.Screen
        icon='article'
        label='Articles'
        path='/articles'
        element={<Articles />}
        />

        <SideNav.Screen
        icon='book'
        label='Courses'
        path='/courses'
        element={<Courses/>}
        />

        <SideNav.Screen
        icon='map'
        label='Roadmaps'
        path='/roadmaps'
        element={<Courses/>}
        />

        <SideNav.Screen
        icon='group'
        label='Groups'
        path='/groups'
        element={<Groups/>}
        />

        <SideNav.Screen
        icon='add'
        label='Creator Studio'
        path='/create'
        element={<Create/>}
        />

        <SideNav.Screen
        path='/create/course'
        element={<CreateCourse/>}
        />

        <SideNav.Screen
        path='/create/roadmap'
        element={<CreateRoadmap/>}
        />


        <SideNav.Screen
        path='/create/article'
        element={<CreateArticle/>}
        />

        <SideNav.Screen
        path='/create/video'
        element={<CreateVideo/>}
        />
        
        <SideNav.Screen
        path='/edit/group/:id'
        element={<EditGroup/>}
        />

        <SideNav.Screen
        path='/view/article/:id'
        element={<ViewArticle/>}
        />

        <SideNav.Screen
        path='/view/course/:id'
        element={<ViewCourse/>}
        />
        <SideNav.Screen
        path='/search'
        element={<Search/>}
        />

        <SideNav.Screen
        path='/create/group'
        element={<CreateGroup/>}
        />

        <SideNav.Screen
        path='/billing'
        element={<Billing/>}
        />

    </SideNav>
    )
}

const OrderSuccess = () => {
  return(
    <p>asd</p>
  )
}


const Logo = () => {
    return(
      <p style={{alignSelf:'center',textAlign:'center',fontSize:22,marginTop:50,marginBottom:75,pointerEvents:'none'}}>
        <span style={{color:'orange'}}>
          Skill
        </span>
  
        <span style={{color:'white'}}>
        Center
        </span>
      </p>
    )
}

export default Home;