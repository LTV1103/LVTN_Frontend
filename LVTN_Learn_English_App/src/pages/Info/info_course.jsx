import '../Info/info.styles.css'
import Header_User from "../../components/UI/Header/head_User";
import Footer_Index from "../../components/UI/Footer/foot_index";
import Content_Center from "../../components/UI/Center/course/center_course";
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