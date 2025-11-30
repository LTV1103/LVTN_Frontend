import '../Button/button.styles.css';
import cart from '../../../assets/icons/cart.svg';
export default function BTN_GioHang({onClick}){
    return (
      <button 
        type="button" 
        className="btn-cart-circle" 
        onClick={onClick}
        title="Giỏ hàng"
      >
        <img src={cart} alt="cart" height="24" />
      </button>
    );
}