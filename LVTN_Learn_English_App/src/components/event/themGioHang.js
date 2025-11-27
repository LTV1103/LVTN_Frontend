// useDetailItem.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import courseApi from "../../services/courseApi";

export default function useDetailItem() {
  const { id } = useParams(); // id của course
  const [courseByID, setCourseByID] = useState(null);
  const [userCourses, setUserCourses] = useState([]); // danh sách khóa học user đã mua
  const [added, setAdded] = useState(false);
  const [cartItem, setCartItem] = useState(0);
  const [purchased, setPurchased] = useState(false); // trạng thái đã mua

  // lấy danh sách khóa học user đã mua
  useEffect(() => {
    const iduser = localStorage.getItem("id");
    if (!iduser) return;

    const fetchCourseByUser = async () => {
      try {
        const res = await courseApi.fetchCourseByUser(iduser);
        setUserCourses(res || []);
      } catch (error) {
        console.error("Lỗi khi load course của user:", error);
      }
    };
    fetchCourseByUser();
  }, []);

  // gọi API lấy course theo id và kiểm tra đã mua chưa
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await courseApi.fetchCourseByID(id);
        setCourseByID(res);

        // kiểm tra xem course hiện tại có trong danh sách userCourses không
        if (res && userCourses.find(c => c.courseId === res.courseId)) {
          setPurchased(true);
        } else {
          setPurchased(false);
        }
      } catch (err) {
        console.error("Lỗi khi load course:", err);
      }
    };
    fetchCourse();
  }, [id, userCourses]);

  // load giỏ hàng từ localStorage khi mở trang
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItem(savedCart.length);
    if (courseByID && savedCart.find(item => item.courseId === courseByID.courseId)) {
      setAdded(true);
    }
  }, [courseByID]);

  // thêm vào giỏ hàng
  const handleAddToCart = async () => {
    const checkToken = localStorage.getItem("accessToken");
    if (!checkToken) {
      alert("Vui lòng đăng nhập để thêm vào giỏ hàng.");
      return;
    }
    if (!courseByID) return;

    // kiểm tra đã mua chưa
    if (purchased) {
      alert("Bạn đã mua khóa học này rồi, không thể mua lại.");
      return;
    }

    try {
      const checkCourse = await courseApi.fetchCourseByID(courseByID.courseId);
      if (!checkCourse) {
        alert("Khóa học không tồn tại hoặc đã bị xóa.");
        return;
      }

      const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
      if (!cart.find(item => item.courseId === courseByID.courseId)) {
        const updatedCart = [...cart, courseByID];
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));

        setCartItem(updatedCart.length);
        setAdded(true);
        alert("Đã thêm vào giỏ hàng: " + courseByID.courseId);
      } else {
        alert("Khóa học đã có trong giỏ hàng: " + courseByID.courseId);
      }
    } catch (err) {
      console.error("Lỗi khi kiểm tra course:", err);
      alert("Có lỗi xảy ra khi kiểm tra khóa học.");
    }
  };

  return { courseByID, added, cartItem, purchased, handleAddToCart };
}
