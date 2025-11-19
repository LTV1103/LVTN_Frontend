import Header_User from "../../components/UX/Header/head_User";
import Footer_Index from "../../components/UX/Footer/foot_index";
import Center_Cart from "../../components/UX/Center/carts/cartCenter"
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