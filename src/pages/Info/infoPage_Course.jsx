import '../page.styles.css'
import Header_User from "../../components/Layout/Header/head_user";
import Footer_Index from "../../components/Layout/Footer/foot_index";
import Content_Center from "../../components/Layout/Center/User_Course/center_user_course";
export default function Info_Course(){
  return (
    <div className="home-wrapper">
      <Header_User />
      <div className="main-content">
        <Content_Center />
      </div>
      <Footer_Index />
    </div>
  );
}