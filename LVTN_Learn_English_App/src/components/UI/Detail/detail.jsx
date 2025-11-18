// Detail_Item.js
import useXulyKhoaHoc from "../../Logic/Xuly_Chitiet_KH";
import '../Card/card.styles.css'; // style sẵn có
import { useState } from "react";

export default function Detail_Item() {
  const courseByID = useXulyKhoaHoc();
  const [added, setAdded] = useState(false); // trạng thái đã thêm giỏ hàng

  const handleAddToCart = () => {
    // ở đây bạn có thể gọi API thêm vào giỏ hàng hoặc lưu localStorage
    console.log("Đã thêm vào giỏ hàng:", courseByID.id);
    setAdded(true);
  };

  if (!courseByID) return <p>Đang tải dữ liệu...</p>; // loading

  return (
    <div className="detail-item" style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <img
        src={new URL(`../../../assets/card_img/${courseByID.imgUrl}`, import.meta.url).href}
        alt={courseByID.courseName}
        className="card-image"
        style={{ width: '100%', borderRadius: '12px', marginBottom: '16px' }}
      />
      <h2 style={{ marginBottom: '12px' }}>{courseByID.courseName}</h2>
      <p style={{ marginBottom: '8px', color: '#555' }}>{courseByID.description}</p>
      <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Giá: {new Intl.NumberFormat('vi-VN').format(courseByID.price)} ₫</p>
      <p style={{ marginBottom: '16px' }}>Level: {courseByID.level?.toUpperCase()}</p>

      <button
        type="button"
        onClick={handleAddToCart}
        style={{
          padding: '10px 20px',
          backgroundColor: added ? '#4ade80' : '#667eea',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: '0.3s'
        }}
      >
        {added ? "Đã thêm vào giỏ hàng" : "Thêm vào giỏ hàng"}
      </button>
    </div>
  );
}
