import Header_Index from "../../Header/head_User";
import Footer_Index from "../../Footer/foot_index";
import Detail_Course from "../../../UI/Detail/detail";
export default function Detail_Course_Page() {
  return (
    <div className="home-wrapper">
      <Header_Index />
      <div className="main-content">
        <Detail_Course />
      </div>
      <Footer_Index />
    </div>
  );
}