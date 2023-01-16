import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useLocation
} from "react-router-dom";
import Watch from './screens/Watch';
import {useSelector} from 'react-redux';
import Landing from './screens/Landing';
import Register from './screens/Register';
import Login from './screens/Login'
import Home from './routes/Home';
import OrderSuccess from './screens/OrderSuccess';
import { useAuthorizeQuery } from './app/services/auth';
import Logo from './components/common/Logo';

function App() {
  const user = useSelector(state => state.auth.user);
  const {data,isLoading} = useAuthorizeQuery(user);
  if(isLoading) return <SplashScreen />

  return (
    <BrowserRouter>
      {
        data?.success ? 
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/watch/:id" element={<Watch />}/>
        </Routes>
        :
        <Routes>
          <Route path="*" exact={true} element={<Login />} />
          <Route path="/" element={<Landing />}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/order/success" element={<OrderSuccess />}/>
        </Routes>
      }
    </BrowserRouter>
  );
}

const SplashScreen = () => {
  return(
    <div style={{height:'100vh',width:'100vw',backgroundColor:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <Logo type='light' size={42}/>
    </div>
    )
}

export default App;
