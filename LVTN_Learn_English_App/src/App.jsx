import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeUser from './pages/Home/home_user.jsx';
import HomePage from './pages/Home/home.jsx';
import HomeAdmin from './pages/Admin/index.jsx'
import UserInfo from './pages/Info/info.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin' element={<HomeAdmin/>} />
        <Route path='/homeuser' element={<HomeUser />} />
        <Route path='/info' element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
