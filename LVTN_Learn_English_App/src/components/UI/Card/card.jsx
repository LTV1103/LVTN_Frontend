import '../Card/card.styles.css'
import arrow from '../../../assets/icons/arrow-right.svg';

export default function Card({imgUrl, courseName, description, price, level, onClick}) {
  const formattedPrice = new Intl.NumberFormat('vi-VN').format(price);
  
  const getLevelColor = (lvl) => {
    const colors = {
      beginner: '#667eea',
      intermediate: '#f59e0b',
      advanced: '#ef4444'
    };
    return colors[lvl?.toLowerCase()] || '#667eea';
  };

  return (
    <div className="course-card">
      <div className="card-image-wrapper">
        {imgUrl ? (
            <img
            src={new URL(`../../../assets/card_img/${imgUrl}`, import.meta.url).href}
            className="card-image"
          />
        ) : (
          <div className="card-image-placeholder">
            <i className="bi bi-book"></i>
          </div>
        )}
        <span className="level-badge" style={{ backgroundColor: getLevelColor(level) }}>
          {level?.toUpperCase() || 'N/A'}
        </span>
      </div>

      <div className="card-content">
        <h4 className="card-title">{courseName}</h4>
        <p className="card-description">{description}</p>

        <div className="card-footer">
          <div className="price-section">
            <span className="price-label">Giá</span>
            <span className="price-amount">{formattedPrice} ₫</span>
          </div>
        <button  type="button" className="btn-enroll" onClick={onClick}>
            <img src={arrow} alt="Enroll" />
          </button>
        </div>
      </div>
    </div>
  );
}
