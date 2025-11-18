import './Detail.styles.css'
import Header_User from "../../components/UX/Header/head_User";
import Header_Index from "../../components/UX/Header/head_index";
import Footer_Index from "../../components/UX/Footer/foot_index";
import Detail from "../../components/UI/Detail/detail";
export default function Detail_Item(){
    return(
        <div className="home-wrapper">
              <Header_User />
              <div className="main-content-detail">
                <Detail />
              </div>
              <Footer_Index />
        </div>
    )
}