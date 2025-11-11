import '../Button/button.styles.css';
export default function BTN_DangKy({onClick}){
    return (
        <button type="button" className="btn btn-outline-info" onClick={onClick}>Đăng Ký</button>

    );
}