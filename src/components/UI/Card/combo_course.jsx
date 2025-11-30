import Course_user from "./course_user";
import "../Card/card.styles.css";
import courseApi from "../../../services/courseApi";
import { useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";

export default function Combo_course(){
    const [course , setCourse] = useState([]);
    
    useEffect(() => {
        const fetchCourseUserId = async() => {
            const id = localStorage.getItem("id");
            try {
            const data  = await courseApi.fetchCourseByUser(id);
            setCourse(data || []);  
            } catch (error) {
                console.error("Lỗi khi fetchCourseByUser:", error);
                setCourse([]);
            }  
        };fetchCourseUserId();
    },[]);

    const nav = useNavigate();
    const handleClick = (id) =>{
        nav(`/learn/${id}`);
    }

    return(
         <div
              className="combo-card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)', // 4 cột mỗi hàng
                gap: '16px',
              }}
            >
              {course.length > 0
                ? course.map((course, index) => (
                    <Course_user
                      key={index}
                      imgUrl={course.imgUrl}
                      courseName={course.courseName}
                      status={course.status}
                      onClick={() => handleClick(course.courseId)}
                    />
                  ))
                : 
                  <>
                    <div className="justify-content-center">
                           <p>Bạn chưa mua khóa học nào.</p>
                    </div>              
                </>
              }
            </div>

    );
}