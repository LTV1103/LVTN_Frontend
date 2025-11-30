import '../Card/card.styles.css'
import BTN_LearnNow from '../Button/btn_hocngay';

export default function course_user({imgUrl,courseName,status,onClick}){
    return(
        <div className="course-card">
            <div className="card-image-wrapper">
                {imgUrl ? (<img
                src={new URL(`../../../assets/card_img/${imgUrl}`, import.meta.url).href}
                className="card-image"/>) : (<div className="card-image-placeholder"><i className="bi bi-book"></i></div>)}
                <span className="level-badge" style={{ backgroundColor: '#31df3aff' }}>
                {status?.toUpperCase() || 'N/A'}</span>
            </div>
            <div className="card-content">
                <h2 className="card-title">{courseName}</h2>
                <div className="card-footer justify-content-center">
                <BTN_LearnNow onclick={onClick}/>
                </div>
        </div>
    </div>
    );
}