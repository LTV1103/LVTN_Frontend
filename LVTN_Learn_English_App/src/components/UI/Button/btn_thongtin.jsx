import '../Button/button.styles.css';
export  default function btn_infoUser({onClick}){
    return(
            <button type="button" className="btn btn-outline-primary" onClick={onClick}>Thong tin dang nhap</button>

    );
}