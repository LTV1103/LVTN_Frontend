import '../Button/button.styles.css';
import chuyentrangIcon from '../../../assets/icons/chuyendoi.svg'
export default function BTN_ChuyenTrang({onClick}){
    return (
        <button 
        type="button" 
        className="btn btn-outline-info" 
        onClick={onClick}>
            <img src={chuyentrangIcon} alt="cart" height="24" />
        </button>
        
    );
}