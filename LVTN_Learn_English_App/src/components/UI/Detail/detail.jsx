// Detail_Item.js
import './detail.styles.css';
import courseApi from '../../../services/courseApi';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function Detail_Item() {
  const { id } = useParams();
  const [courseByID, setCourseByID] = useState(null); // đổi tên state cho rõ nghĩa
  const [added, setAdded] = useState(false);
  const [cartItem, setCartItem] = useState(0);

  // gọi API lấy course theo id
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await courseApi.fetchCourseByID(id);
        setCourseByID(res);
      } catch (err) {
        console.error("Lỗi khi load course:", err);
      }
    };
    fetchCourse();
  }, [id]);

  // load giỏ hàng từ localStorage khi mở trang
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItem(savedCart.length);
    if (courseByID && savedCart.find(item => item.id_Course === courseByID.id_Course)) {
      setAdded(true);
    }
  }, [courseByID]);

  // thêm vào giỏ hàng
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
      alert("Đã thêm vào giỏ hàng: " + courseByID.id_Course);
    } else {
      alert("Khóa học đã có trong giỏ hàng: " + courseByID.id_Course);
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
