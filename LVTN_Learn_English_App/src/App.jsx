import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeUserPage from './pages/Home/homePage_User.jsx';
import HomePage from './pages/Home/homePage.jsx';
import HomeAdminPage from './pages/Admin/adminPage.jsx';
import CourseUserPage from './pages/Info/infoPage_course.jsx';
import ShopPage from './pages/Shop/shopPage.jsx';
import UserPage from './pages/Info/infoPage_user.jsx';
import ProtectedRoute from './components/Logic/KiemTra_Token.jsx';
import DetailCourse from './pages/Detail_Item/detailPage_CourseItem.jsx'
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
              <HomeAdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/detail/:id'
          element={
            <ProtectedRoute>
              <DetailCourse />
            </ProtectedRoute>
          }
        />


        {/* User pages */}
        <Route
          path='/homeuser'
          element={
            <ProtectedRoute>
              <HomeUserPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/info'
          element={
            <ProtectedRoute>
              <CourseUserPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/shop'
          element={
            <ProtectedRoute>
              <ShopPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/infouser'
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
