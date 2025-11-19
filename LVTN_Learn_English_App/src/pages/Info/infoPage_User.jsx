import '../Info/infoPage.styles.css'
import Header_User from "../../components/UX/Header/head_User";
import Footer_Index from "../../components/UX/Footer/foot_index";
export default function Info_Course(){
  return (
    <div className="home-wrapper">
      <Header_User />
      <div className="main-content">
        <p>User Page</p>
      </div>
      <Footer_Index />
    </div>
  );
}