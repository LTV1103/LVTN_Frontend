import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeUser from './pages/Home/home_user.jsx';
import HomePage from './pages/Home/home.jsx';
import HomeAdmin from './pages/Admin/index.jsx';
import UserInfo from './pages/Info/info_course.jsx';
import Shop_Page from './pages/Shop/shope.jsx';
import Info_User from './pages/Info/info_user.jsx';
import ProtectedRoute from './components/Logic/KiemTra_Token.jsx';
import Detail from './pages/Detail_Item/De_Item.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />

        {/* Admin page bảo vệ bằng token */}
        <Route
          path='/admin'
          element={
            <ProtectedRoute>
              <HomeAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path='/detail/:id'
          element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          }
        />


        {/* User pages */}
        <Route
          path='/homeuser'
          element={
            <ProtectedRoute>
              <HomeUser />
            </ProtectedRoute>
          }
        />
        <Route
          path='/info'
          element={
            <ProtectedRoute>
              <UserInfo />
            </ProtectedRoute>
          }
        />
        <Route
          path='/shop'
          element={
            <ProtectedRoute>
              <Shop_Page />
            </ProtectedRoute>
          }
        />
        <Route
          path='/infouser'
          element={
            <ProtectedRoute>
              <Info_User />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
