import '../stylesPage/page.styles.css'
import Header_User from "../../components/Layout/Header/head_user";
import Footer_Index from "../../components/Layout/Footer/foot_index";
import Center_Cart from "../../components/Layout/Center/carts/center_cart"
export default function Info_Course(){
  return (
    <div className="home-wrapper">
      <Header_User />
      <div className="main-content">
        <Center_Cart />
      </div>
      <Footer_Index />
    </div>
  );
}