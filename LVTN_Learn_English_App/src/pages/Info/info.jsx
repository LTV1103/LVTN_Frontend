import '../Info/info.styles.css'
import Header_User from "../../components/UI/Header/head_User";
import Footer_Index from "../../components/UI/Footer/foot_index";
export default function Info_User(){
  return (
    <div className="home-wrapper">
      <Header_User />
      <div className="main-content">
        <p>Hello User</p>
      </div>
      <Footer_Index />
    </div>
  );
}