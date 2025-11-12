import { useState, useEffect } from "react";
import courseApi from "../../services/courseApi";

export default function useCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    courseApi.fetchCourse()
      .then(data => setCourses(data))
      .catch(err => console.error(err));
  }, []);

  return courses;
}
