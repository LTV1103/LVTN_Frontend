import '../Button/button.styles.css';
export default function BTN_DangNhap({onClick}){
    return (
    <button 
    type="button" 
    className="btn btn-outline-primary" 
    onClick={onClick}>Đăng Nhập
    </button>
    );
}