import '../Info/info.styles.css'
import Header_User from "../../components/UX/Header/head_User";
import Footer_Index from "../../components/UX/Footer/foot_index";
import Content_Center from "../../components/UX/Center/user_course/center_user_course";
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