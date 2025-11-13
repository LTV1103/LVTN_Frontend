import '../Card/card.styles.css'
import arrow from '../../../assets/icons/arrow-right.svg';
export default function Card({ imgUrl, courseName, description, price, level }) {
  // Format price to Vietnamese format
  const formattedPrice = new Intl.NumberFormat('vi-VN').format(price);

  // Get level badge color
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
          <img src={imgUrl} className="card-image" alt={courseName} />
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
          <button className="btn-enroll">
            <img src={arrow} alt="Enroll" />
          </button>
        </div>
      </div>
    </div>
  );
}
