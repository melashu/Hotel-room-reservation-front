import './App.css';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import CustomNav from './Components/nav/nav';
import RoomDetail from './Components/RoomDetail/roomdetail';
import Hoteldetail from './Components/HotelDetail/hoteldetail';
import PageNotFound from './Components/PageNotFound/pagenotfound';
import Hotel from './Components/Hotel/hotel';
import Signup from './Components/signup/signup';
import Login from './Components/login/Login';
import CreateReserve from './Components/CreateReserve/createreserve';
import Protected from './Components/protectedroute';
import Myreservation from './Components/Myreservation/myreservation';
import RouteAdmin from './Components/Admin/RouteAdmin';
import { authenticated } from './Redux/users/users';
// import RouteConfig from './Components/Admin/RouteAdmin';
import UsersPage from './user';
import AdminPage from './admin';
function App() {
  const loginstatus = useSelector(authenticated);

  return (
    <div>
       <Routes>
          <Route path='/' element ={<UsersPage />} />
          <Route path='/admin/*' element ={<RouteAdmin />} />
       </Routes>  
    </div>
    
  );
 }
 
 export default App;
 