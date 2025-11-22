import { useEffect, useState } from "react";
import lessonApi from "../../../services/lessonApi"; 
import "./load.styles.css"; // dùng chung CSS

export default function LessonDashboard() {
  const [lessons, setLessons] = useState([]);
  const [error, setError] = useState(null);

  // Call API
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const data = await lessonApi.fetchLesson(); // lấy danh sách bài học
        setLessons(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchLessons();
  }, []);

  const handleDelete = async (id) => {
    try {
      await lessonApi.deleteLesson(id);
      setLessons(lessons.filter((l) => l.id_Lesson !== id));
      alert("Xóa bài học thành công!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = async (id, newData) => {
    try {
      const updated = await lessonApi.updateLesson(id, newData);
      setLessons(lessons.map((l) => (l.id_Lesson === id ? updated : l)));
      alert("Cập nhật bài học thành công!");
    } catch (err) {
      alert(err.message);
    }
  };

  // UI
  return (
    <div className="admin-dashboard-wrapper p-1">
      <h1 className="admin-dashboard-title">Quản lý bài học</h1>
      {error && <p style={{ color: "red", marginBottom: "16px" }}>{error}</p>}
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên bài học</th>
            <th>Mô tả</th>
            <th>Khóa học</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((l) => (
            <tr key={l.id_Lesson}>
              <td>{l.idLesson}</td>
              <td>{l.lessonTitle}</td>
              <td>{l.description}</td>
              <td>{l.courseName}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(l.id_Lesson, { lessonName: "Tên mới" })}>Sửa</button>
                <button className="btn-delete" onClick={() => handleDelete(l.id_Lesson)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
