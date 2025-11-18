import Card from '../Card/card';
import useXulyKhoaHoc from '../../Logic/Xuly_KhoaHoc';
import '../Card/card.styles.css';
import { useNavigate } from "react-router-dom";



export default function Combo_Card() {
  const courses = useXulyKhoaHoc();
  const navigate  = useNavigate();
  const handleClick = (id) => {
    window.scrollTo(0,0);
    navigate(`/detail/${id}`)
  }
  // console.log('Courses in Combo_Card:', courses);
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
