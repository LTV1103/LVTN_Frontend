import { useEffect, useState } from "react";
import courseApi from "../../../services/courseApi";
import "./load.styles.css"; // dùng chung CSS với user dashboard

export default function CourseDashboard() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  // Call API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await courseApi.fetchCourse(); // gọi danh sách khóa học
        setCourses(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await courseApi.deleteCourse(id);
      setCourses(courses.filter((c) => c.id_Course !== id));
      alert("Xóa khóa học thành công!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = async (id, newData) => {
    try {
      const updated = await courseApi.updateCourse(id, newData);
      setCourses(courses.map((c) => (c.id_Course === id ? updated : c)));
      alert("Cập nhật khóa học thành công!");
    } catch (err) {
      alert(err.message);
    }
  };

  // UI
  return (
    <div className="admin-dashboard-wrapper p-1">
      <h1 className="admin-dashboard-title">Quản lý khóa học</h1>
      {error && <p style={{ color: "red", marginBottom: "16px" }}>{error}</p>}
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên khóa học</th>
            <th>Mô tả</th>
            <th>Giá</th>
            <th>Level</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.id_Course}>
              <td>{c.id_Course}</td>
              <td>{c.courseName}</td>
              <td>{c.description}</td>
              <td>{new Intl.NumberFormat('vi-VN').format(c.price)} ₫</td>
              <td>{c.level}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(c.id_Course, { courseName: "Tên mới" })}>Sửa</button>
                <button className="btn-delete" onClick={() => handleDelete(c.id_Course)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
