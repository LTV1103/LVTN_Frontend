import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeUserPage from './pages/Home/homePage_User.jsx';
import HomePage from './pages/Home/homePage.jsx';
import HomeAdminPage from './pages/Admin/adminPage.jsx';
import CourseUserPage from './pages/Info/infoPage_course.jsx';
import ShopPage from './pages/Shop/shopPage.jsx';
import UserPage from './pages/Info/infoPage_user.jsx';
import KTToken from './components/Logic/KiemTra_Token.jsx';
import DetailCoursePage from './pages/Detail_Item/detailPage.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />

        {/* Admin page bảo vệ bằng token */}
        <Route
          path='/admin'
          element={
            <KTToken>
              <HomeAdminPage />
            </KTToken>
          }
        />
        <Route
          path='/detail/:id'
          element={
              <DetailCoursePage />
          }
        />
        {/* User pages */}
        <Route
          path='/homeuser'
          element={
            <KTToken>
              <HomeUserPage />
            </KTToken>
          }
        />
        <Route
          path='/info'
          element={
            <KTToken>
              <CourseUserPage />
            </KTToken>
          }
        />
        <Route
          path='/shop'
          element={
            <KTToken>
              <ShopPage />
            </KTToken>
          }
        />
        <Route
          path='/infouser'
          element={
            <KTToken>
              <UserPage />
            </KTToken>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
