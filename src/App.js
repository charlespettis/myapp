import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Watch from './screens/Watch';
import {useDispatch, useSelector} from 'react-redux';
import Landing from './screens/Landing';
import Register from './screens/Register';
import Login from './screens/Login'
import Home from './routes/Home';
import { useAuthorizeQuery } from './app/services/auth';
import { setCredentials } from './app/reducers/authSlice';

function App() {
  const user = useSelector(state => state.auth.user);
  const {data, isLoading, isError } = useAuthorizeQuery();
  console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
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

export default App;
