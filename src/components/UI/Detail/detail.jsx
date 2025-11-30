import './detail.styles.css';
import useDetailItem from '../../event/themgiohang';

export default function Detail_Item() {
  const { courseByID, added, cartItem, handleAddToCart } = useDetailItem();

  if (!courseByID) return <p>Đang tải dữ liệu...</p>;

  return (
    <div className="detail-item-wrapper">
      <img
        src={new URL(`../../../assets/card_img/${courseByID.imgUrl}`, import.meta.url).href}
        alt={courseByID.courseName}
        className="detail-item-image"
      />
      <h2 className="detail-item-title">{courseByID.courseName}</h2>
      <p className="detail-item-desc">{courseByID.description}</p>
      <p className="detail-item-price">
        Giá: {new Intl.NumberFormat('vi-VN').format(courseByID.price)} ₫
      </p>
      <p className="detail-item-level">
        Level: {courseByID.level?.toUpperCase()}
      </p>
      <p className="detail-item-cart">Số lượng trong giỏ hàng: {cartItem}</p>
      <button
        type="button"
        onClick={handleAddToCart}
        className={`detail-item-btn ${added ? "added" : ""}`}
      >
        {added ? "Đã thêm vào giỏ hàng" : "Thêm vào giỏ hàng"}
      </button>
    </div>
  );
}
