import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Videos from './screens/Videos';
import SideNav from './components/navs/SideNav';
import Courses from './screens/Courses';
import Watch from './screens/Watch';
import Create from './screens/Create';
import Groups from './screens/Groups';
import CreateCourse from './screens/CreateCourse';
import CreateArticle from './screens/CreateArticle';
import CreateVideo from './screens/CreateVideo';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/watch" element={<Watch />}/>
        </Routes>
    </BrowserRouter>
  );
}


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
      icon='list'
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
      path='/create/article'
      element={<CreateArticle/>}
      />

      <SideNav.Screen
      path='/create/video'
      element={<CreateVideo/>}
      />

    </SideNav>
  )
}

const Logo = () => {
  return(
    <p style={{alignSelf:'center',textAlign:'center',fontSize:22,marginTop:50,marginBottom:75,pointerEvents:'none'}}>
      <span style={{color:'white'}}>
        Sure
      </span>

      <span style={{color:'orange'}}>
      Learn
      </span>
    </p>
  )
}

export default App;
