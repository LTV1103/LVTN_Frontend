import './button.styles.css'
export default function BTN_LearnNow({onClick}){
    return(
        <button
        type="button" 
        className="btn btn-outline-primary btn_infoUser" 
        onClick={onClick}
        title="Học ngay">Học Ngay
        </button>

    );   
}