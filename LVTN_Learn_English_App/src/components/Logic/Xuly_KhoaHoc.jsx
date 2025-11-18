import { useState, useEffect } from "react";
import courseApi from "../../services/courseApi";

export default function useXulyKhoaHoc() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await courseApi.fetchCourse();
        setCourses(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourses();
  }, []);

  return courses;
}
