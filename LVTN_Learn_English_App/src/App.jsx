import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeUser from './pages/Home/home_user.jsx';
import HomePage from './pages/Home/home.jsx';
import HomeAdmin from './pages/Admin/index.jsx'
import UserInfo from './pages/Info/info_course.jsx'
import Shop_Page from './pages/Shop/shope.jsx';
import Info_User from './pages/Info/info_user.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin' element={<HomeAdmin/>} />
        <Route path='/homeuser' element={<HomeUser />} />
        <Route path='/info' element={<UserInfo />} />
        <Route path='/shop' element={<Shop_Page />} />
        <Route path='/infouser' element={<Info_User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
