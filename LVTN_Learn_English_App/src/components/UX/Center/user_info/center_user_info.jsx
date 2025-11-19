// import './userInFo.styles.css'; // import css
import { useState, useEffect } from "react";
import userApi from "../../../../services/userApi";

export default function User_Info() {
  const id = localStorage.getItem("id");
  const [userByID, setUserByID] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await userApi.fetchUsersbyID(id);
        setUserByID(response);
      } catch (error) {
        console.error("Lỗi khi lấy user:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [id]);

  if (loading) return <p style={{textAlign: "center"}}>Đang tải dữ liệu...</p>;
  if (!userByID) return <p style={{textAlign: "center"}}>Không tìm thấy dữ liệu người dùng</p>;

  return (
    <div className="main-content">
      <h2>Thông tin người dùng</h2>
      <p><strong>Họ và tên:</strong> {userByID.fullname}</p>
      <p><strong>Email:</strong> {userByID.email}</p>
    </div>
  );
}
