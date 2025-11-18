import '../Button/button.styles.css';
export  default function BTN_KhoaHocNguoiDung({onClick}){
    return(
            <button 
            type="button" 
            className="btn btn-outline-primary btn_infoUser" 
            onClick={onClick}>Khóa học của tôi
            </button>

    );
}