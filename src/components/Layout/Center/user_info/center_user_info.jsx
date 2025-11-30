import { useState, useEffect } from "react";
import userApi from "../../../../services/userApi";
import "./center.user.info.styles.css"; // import CSS

export default function User_Info() {
  const id = localStorage.getItem("id");
  const [userByID, setUserByID] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await userApi.fetchUsersbyID(id);
        setUserByID(response); // lấy từ response.data
      } catch (error) {
        console.error("Lỗi khi lấy user:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [id]);

  if (loading) return <p className="loading-text">Đang tải dữ liệu...</p>;
  if (!userByID) return <p className="loading-text">Không tìm thấy dữ liệu người dùng</p>;

  return (
    <div className="user-info-card">
      <h2>Thông tin người dùng</h2>
      <p><strong>Họ và tên:</strong> {userByID.fullname}</p>
      <p><strong>Tên đăng nhập:</strong> {userByID.username}</p>
      <p><strong>Email:</strong> {userByID.email}</p>
      <p><strong>Nhà cung cấp:</strong> {userByID.provider}</p>
      <p><strong>Ngày tạo tài khoản:</strong> {new Date(userByID.createdAt).toLocaleDateString("vi-VN")}</p>
    </div>
  );
}
