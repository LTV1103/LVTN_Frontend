import Card from '../Card/card';
import '../Card/card.styles.css';
import { useNavigate } from "react-router-dom";
import courseApi from '../../../services/courseApi';
import { useState, useEffect } from "react";

export default function Combo_Card() {
  const [courses, setCourses] = useState([]); // thêm state để lưu danh sách khóa học

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await courseApi.fetchCourse();
        setCourses(data);
      } catch (err) {
        console.error("Lỗi khi load courses:", err);
      }
    };

    fetchCourses();
  }, []);

  const navigate = useNavigate();
  const handleClick = (id) => {
    window.scrollTo(0, 0);
    navigate(`/detail/${id}`);
  };

  return (
    <div
      className="combo-card"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // 4 cột mỗi hàng
        gap: '16px',
      }}
    >
      {courses.length > 0
        ? courses.map((course, index) => (
            <Card
              key={index}
              imgUrl={course.imgUrl}
              courseName={course.courseName}
              description={course.description}
              price={course.price}
              level={course.level}
              onClick={() => handleClick(course.id_Course)}
            />
          ))
        : // fallback 4 card cứng
          <>
            <Card title="Card 1" />
            <Card title="Card 2" />
            <Card title="Card 3" />
            <Card title="Card 4" />
          </>
      }
    </div>
  );
}
