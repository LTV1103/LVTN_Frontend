// Detail_Item.js
import useXulyKhoaHoc from "../../Logic/Xuly_Chitiet_KH";
import './detail.styles.css';
import { useState, useEffect } from "react";

export default function Detail_Item() {
  const courseByID = useXulyKhoaHoc();
  const [added, setAdded] = useState(false);
  const [cartItem, setCartItem] = useState(0);
  console.log("Số lượng trong giỏ hàng:", cartItem);
  // load giỏ hàng từ localStorage khi mở trang
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItem(savedCart.length);
    if (savedCart.find(item => item.id_Course === courseByID?.id_Course)) {
      setAdded(true);
    }
  }, [courseByID]);
  //Them sp moi vao gio hang cu va kiem tra
  const handleAddToCart = () => {
    const checkToken = localStorage.getItem("accessToken");
    if (!checkToken) {
      alert("Vui lòng đăng nhập để thêm vào giỏ hàng.");
      return;
    }
    if (!courseByID) return;
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (!cart.find(item => item.id_Course === courseByID.id_Course)) {
      const updatedCart = [...cart, courseByID];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      setCartItem(updatedCart.length);
      setAdded(true);
      alert("Đã thêm vào giỏ hàng:", courseByID.id_Course);
    } else {
      alert("Khóa học đã có trong giỏ hàng:", courseByID.id_Course);
    }
  };

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
