import '../Button/button.styles.css';
import personIcon from '../../../assets/icons/person.svg';
export default function Btn_TTNGuoiDung({onClick}){
    return (
      <button 
        type="button" 
        className="btn-cart-circle" 
        onClick={onClick}
        title="Thông tin người dùng"
      >
        <img src={personIcon} alt="person" height="24" />
      </button>
    );
}