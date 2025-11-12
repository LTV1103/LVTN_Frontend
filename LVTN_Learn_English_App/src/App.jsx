import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeUser from './pages/Home/home_user.jsx';
import HomePage from './pages/Home/home.jsx';
import HomeAdmin from './pages/Admin/index.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/admin' element={<HomeAdmin/>} />
        <Route path="/homeuser" element={<HomeUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
