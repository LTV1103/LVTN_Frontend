import '../stylesPage/page.styles.css'
import Footer_Admin from "../../components/Layout/Footer/footer_admin";
import Header_Admin from '../../components/Layout/Header/head_admin';
import Center_Admin from '../../components/Layout/Center/admin/center_admin';
import Sidebar from '../../components/UI/Sidebar/sideBar';
export default function HomeAdmin(){
    return(
        <div className="row">
            <div className="col-2 pe-0" >
                <Sidebar />
            </div>
            <div className="col-10 ps-0">
                <div className="home-wrapper">
                    <Header_Admin />
                    <div className="main-content">
                        <Center_Admin/>
                    </div>
                    <Footer_Admin/>
                </div>
            </div>
        </div>

  );
}