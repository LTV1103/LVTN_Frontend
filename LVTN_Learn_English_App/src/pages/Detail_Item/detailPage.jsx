import './detailPage.styles.css'
import Header_User from "../../components/UX/Header/head_User";
import Header_Index from "../../components/UX/Header/head_Index";
import Footer_Index from "../../components/UX/Footer/foot_index";
import Detail from "../../components/UX/Center/detail_course/center_detail_course";

export default function Detail_Item() {
  const checkToken = localStorage.getItem("accessToken");

  if (!checkToken) {
    return (
      <div className="home-wrapper">
        <Header_Index />
        <div className="main-content-detail">
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
      <div className="main-content-detail">
        <Detail />
      </div>
      <Footer_Index />
    </div>
  );
}
