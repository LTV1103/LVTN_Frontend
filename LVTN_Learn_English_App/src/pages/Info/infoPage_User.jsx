import '../stylesPage/page.styles.css'
import Header_User from "../../components/Layout/Header/head_user";
import Footer_Index from "../../components/Layout/Footer/foot_index";
import User_Info from "../../components/Layout/Center/user_info/center_user_info";
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