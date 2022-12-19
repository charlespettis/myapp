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

function App() {
  const user = useSelector(state => state.auth.user);
  
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
          <Route path="/order/success" element={<OrderSuccess />}/>
        </Routes>
      }
    </BrowserRouter>
  );
}
export default App;
