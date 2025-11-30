import './carts.styles.css'
import { useState, useEffect } from "react";
import Xuly_ThanhToan from '../../Logic/Xuly_ThanhToan';


export default function Them_SP() {
  const [cartItems, setCartItems] = useState([]);
    let tongGia = 0;
    cartItems.forEach(course => {
    tongGia += course.price;
    });
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);


  
  return (
    <div className="cart-wrapper">
      <h2>Giỏ hàng của bạn</h2>
      <div className="cart-title">
        Tổng số sản phẩm: {cartItems.length}
        <div>Tong gia: {new Intl.NumberFormat("vi-VN").format(tongGia)} ₫</div>
      </div>
      <hr className="cart-divider" />

      {cartItems.length > 0 ? (
        cartItems.map((course, idx) => (
          <div key={course.id_Course || idx} className="cart-item">
            <p><b>Tên khóa học:</b> {course.courseName}</p>
            <p><b>Giá:</b> {new Intl.NumberFormat("vi-VN").format(course.price)} ₫</p>
        
            <img 
              src={new URL(`../../../assets/card_img/${course.imgUrl}`, import.meta.url).href}
              alt={course.courseName}
            />
          </div>
        ))
      ) : (
        <p>Không có sản phẩm nào.</p>
      )}
      <div>
       <Xuly_ThanhToan />
      </div>
    </div>
  );
}
