import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeUserPage from './pages/Home/homePage_User.jsx';
import HomePage from './pages/Home/homePage.jsx';

import CourseUserPage from './pages/Info/infoPage_course.jsx';
import DetailCoursePage from './pages/Detail_Item/detailPage.jsx'

import ShopPage from './pages/Shop/shopPage.jsx';
import UserPage from './pages/Info/infoPage_user.jsx';

import KTToken from './components/event/KiemTra_Token.js';
import KTRole from './components/event/checkroleAdmin.js';

import HomeAdminPage from './pages/Admin/adminPage.jsx';
import Admin_Course from './pages/Admin/adminPage_course.jsx';
import Admin_User from './pages/Admin/adminPage_user.jsx';
import Admin_Lesson from './pages/Admin/adminPage_lesson.jsx';
import Admin_Payment from './pages/Admin/adminPage_payment.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/homeuser'
          element={
            <KTToken>
              <HomeUserPage />
            </KTToken>
          }
        />
        <Route
          path='/admin'
          element={
            <KTToken>
              <KTRole>
                <HomeAdminPage />
              </KTRole>
            </KTToken>
          }
        />
        <Route
          path='/admin/user'
          element={
            <KTToken>
              <KTRole>
                 <Admin_User />
              </KTRole>
            </KTToken>
          }
        />
        <Route
          path='/admin/course'
          element={
            <KTToken>
              <KTRole>
              <Admin_Course />
              </KTRole>
            </KTToken>
          }
        />
        <Route
          path='/admin/payment'
          element={
            <KTToken>
              <KTRole>
              <Admin_Payment />
              </KTRole>
            </KTToken>
          }
        />
        <Route
          path='/admin/lesson'
          element={
            <KTToken>
              <KTRole>
              <Admin_Lesson />
              </KTRole>
            </KTToken>
          }
        />
        <Route
          path='/detail/:id'
          element={
              <DetailCoursePage />
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
