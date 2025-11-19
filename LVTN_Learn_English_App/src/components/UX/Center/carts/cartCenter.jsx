import Header_Index from "../../Header/head_User";
import Footer_Index from "../../Footer/foot_index";
import Cart from "../../../UI/Carts/cart";
export default function Detail_Course_Page() {
  return (
    <div className="home-wrapper">
      <Header_Index />
      <div className="main-content">
        <Cart />
      </div>
      <Footer_Index />
    </div>
  );
}