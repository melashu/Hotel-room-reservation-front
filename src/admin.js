import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import RoomDetail from './Components/RoomDetail/roomdetail';
import Hoteldetail from './Components/HotelDetail/hoteldetail';
import Hotel from './Components/Hotel/hotel';
import CreateReserve from './Components/CreateReserve/createreserve';
import Protected from './Components/protectedroute';
import Myreservation from './Components/Myreservation/myreservation';
import RouteAdmin from './Components/Admin/RouteAdmin';

function AdminPage() {
  // eg 127.168.1.34/admin/login
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={(
            <Protected>
              <RouteAdmin />
            </Protected>
              )}
        />
      </Routes>

    </div>
  );
}

export default AdminPage;
