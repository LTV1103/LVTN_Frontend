import { useEffect, useState } from "react";
import userApi from "../../../services/userApi";
import courseApi from "../../../services/courseApi";
import lessonApi from "../../../services/lessonApi";
import paymentApi from "../../../services/paymentApi";
import "./load.styles.css";

export default function DashboardStats() {
  const [stats, setStats] = useState({
    users: 0,
    courses: 0,
    lessons: 0,
    payments: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await userApi.fetchUsers();
        const courses = await courseApi.fetchCourse();
        const lessons = await lessonApi.fetchLesson();
        const payments = await paymentApi.fetchPayment();

        setStats({
          users: users.length,
          courses: courses.length,
          lessons: lessons.length,
          payments: payments.length,
        });
      } catch (err) {
        console.error("Lỗi khi load dữ liệu:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard-wrapper">
      <h1 className="dashboard-title">📊 Thống kê tổng quan</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h2>👤 Người dùng</h2>
          <p>{stats.users}</p>
        </div>
        <div className="card">
          <h2>📚 Khóa học</h2>
          <p>{stats.courses}</p>
        </div>
        <div className="card">
          <h2>📖 Bài học</h2>
          <p>{stats.lessons}</p>
        </div>
        <div className="card">
          <h2>💳 Thanh toán</h2>
          <p>{stats.payments}</p>
        </div>
      </div>
    </div>
  );
}
