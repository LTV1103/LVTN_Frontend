import '../page.styles.css'
import Footer_Admin from "../../components/Layout/Footer/footer_admin";
import Header_Admin from '../../components/Layout/Header/head_admin';
import Center_Admin_Course from '../../components/Layout/Center/Admin/center_admin_course';
import Sidebar from '../../components/UI/Sidebar/sideBar';
export default function Admin_Course(){
    return(
        <div className="row">
            <div className="col-2 pe-0" >
                <Sidebar />
            </div>
            <div className="col-10 ps-0">
                <div className="home-wrapper">
                    <Header_Admin />
                    <div className="main-content">
                        <Center_Admin_Course/>
                    </div>
                    <Footer_Admin/>
                </div>
            </div>
        </div>

  );
}