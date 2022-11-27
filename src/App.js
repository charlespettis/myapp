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
import {useSelector, useDispatch} from 'react-redux';
import Landing from './screens/Landing';
import Register from './screens/Register';
import Login from './screens/Login'
import { useAuthorizeQuery } from './app/services/auth';
import { setCredentials } from './app/reducers/authSlice';
import EditGroup from './screens/EditGroup';
import Articles from './screens/Articles';
import ViewArticle from './screens/ViewArticle';
import ViewCourse from './screens/ViewCourse';

function App() {
  const user = useSelector(state => state.auth.user);
  const {data, error, isLoading} = useAuthorizeQuery();

  return (
    <BrowserRouter>
      {
        user ? 
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/watch/:id" element={<Watch />}/>
        </Routes>
        :
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" exact={true} element={<Login />} />

        </Routes>
      }
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
      icon='video'
      label='Articles'
      path='/articles'
      element={<Articles />}
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
