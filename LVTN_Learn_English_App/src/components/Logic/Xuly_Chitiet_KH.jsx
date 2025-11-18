import { useState, useEffect } from "react";
import courseApi from "../../services/courseApi";
import { useParams } from "react-router-dom";

export default function useXulyKhoaHoc() {
  const { id } = useParams();
  const [coursesId, setCoursesId] = useState([]);

  useEffect(() => {
    
    const fetchCourses = async () => {
      try {
        const res = await courseApi.fetchCourseById(id);
        setCoursesId(res);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourses();
  }, [id]);

  return coursesId;
}
