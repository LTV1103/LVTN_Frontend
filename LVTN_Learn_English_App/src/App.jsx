import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/home.jsx';
import HomeAdmin from './pages/Admin/index.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<HomeAdmin/>} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
