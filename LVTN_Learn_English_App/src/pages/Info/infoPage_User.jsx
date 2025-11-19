import '../Info/infoPage.styles.css'
import Header_User from "../../components/UX/Header/head_User";
import Footer_Index from "../../components/UX/Footer/foot_index";
import User_Info from "../../components/UX/Center/user_info/center_user_info";
export default function Info_Course(){
  return (
    <div className="home-wrapper">
      <Header_User />
      <div className="main-content">
        <User_Info />
      </div>
      <Footer_Index />
    </div>
  );
}