import Card from '../Card/card';
import useCourses from '../../Logic/card_item';
import '../Card/card.styles.css';

export default function Combo_Card() {
  const courses = useCourses();

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
