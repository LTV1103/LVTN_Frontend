import { useState, useEffect } from "react";
import ThanhToanVNPay from "../event/vnpay";
import BTN_ThanhToan from "../UI/Button/btn_thanhtoan";

export default function Xuly_ThanhToan() {
  const [cartItems, setCartItems] = useState([]);
  const [tongGia, setTongGia] = useState(0);
  const id = localStorage.getItem("id");
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);

    let total = 0;
    savedCart.forEach(course => {
      total += course.price;
    });
    setTongGia(total);
    //kiem tra neu success xoa gio hang
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("status") === "success") {
      localStorage.removeItem("cartItems");
      setCartItems([]);
      setTongGia(0);
    }
  }, []);



  // Hàm xử lý khi click nút thanh toán
  const handleThanhToan = async () => {
    try {
      // Tạo form từ giỏ hàng
      const form = {
        userId: id, // hoặc lấy từ session/context
        courseId: cartItems.map(c => c.courseId).join(","), // nối nhiều idCourse thành chuỗi
        amount: tongGia.toString(),
        orderInfo: "Thanh toán giỏ hàng gồm " + cartItems.map(c => c.courseName).join(", ")
      };

      const result = await ThanhToanVNPay(form);
      console.log(cartItems);  

      if (result.success && result.payment.paymentUrl) {
        // Redirect sang VNPAY
        window.location.href = result.payment.paymentUrl;
      } else {
        alert("Không tạo được link thanh toán!");
      }
    } catch (error) {
      console.error("Lỗi thanh toán:", error);
      alert("Có lỗi xảy ra khi thanh toán!");
    }
  };

  return (
    <div>
      <h2>Giỏ hàng</h2>
      <ul>
        {cartItems.map(course => (
          <li key={course.id}>
            {course.name} - {course.price} VND
          </li>
        ))}
      </ul>
      <p>Tổng giá: {tongGia} VND</p>

      {/* Nút thanh toán */}
      <BTN_ThanhToan onClick={handleThanhToan} label="Thanh toán VNPAY" />
    </div>
  );
}
