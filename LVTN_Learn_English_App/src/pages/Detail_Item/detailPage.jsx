import '../stylesPage/page.styles.css'
import Header_User from "../../components/Layout/Header/head_user";
import Header_Index from "../../components/Layout/Header/head_index";
import Footer_Index from "../../components/Layout/Footer/foot_index";
import Detail from "../../components/Layout/Center/detail_course/center_detail_course";

export default function Detail_Item() {
  const checkToken = localStorage.getItem("accessToken");

  if (!checkToken) {
    return (
      <div className="home-wrapper">
        <Header_Index />
        <div className="main-content">
          <Detail />
        </div>
        <Footer_Index />
      </div>
    );
  }

  // Trường hợp có token
  return (
    <div className="home-wrapper">
      <Header_User />
      <div className="main-content">
        <Detail />
      </div>
      <Footer_Index />
    </div>
  );
}
