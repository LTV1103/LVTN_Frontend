import { useState } from "react";
import "./center.course.styles.css";
import Course_user from "../../../UI/Card/combo_course";

export default function Center_Course() {
  const [activeTab, setActiveTab] = useState("lesson1"); // tab default

  const renderContent = () => {
    switch (activeTab) {
      case "lesson1":
        return (
          <>
            <h2>Khóa học đã mua</h2>
            <Course_user />
          </>
        );

      case "lesson2":
        return (
          <>
            <h2>Từ điển cá nhân</h2>
            <p>Hiển thị danh sách từ đã lưu.</p>
          </>
        );

      case "lesson3":
        return (
          <>
            <h2>Quá trình học tập</h2>
            <p>Chart tiến độ, bài đã hoàn thành…</p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="center-course-wrapper">
      <div className="lesson-container">

        {/* SIDEBAR */}
        <nav className="lesson-sidebar">
          <ul>
            <li>
              <a 
                onClick={() => setActiveTab("lesson1")}
                className={activeTab === "lesson1" ? "active" : ""}
              >
                <i className="bi bi-play-circle"></i>
                Khóa học đã mua
              </a>
            </li>

            <li>
              <a
                onClick={() => setActiveTab("lesson2")}
                className={activeTab === "lesson2" ? "active" : ""}
              >
                <i className="bi bi-play-circle"></i>
                Từ điển cá nhân
              </a>
            </li>

            <li>
              <a
                onClick={() => setActiveTab("lesson3")}
                className={activeTab === "lesson3" ? "active" : ""}
              >
                <i className="bi bi-play-circle"></i>
                Quá trình học tập
              </a>
            </li>
          </ul>
        </nav>

        {/* CONTENT */}
        <div className="lesson-content">{renderContent()}</div>
      </div>
    </div>
  );
}

    