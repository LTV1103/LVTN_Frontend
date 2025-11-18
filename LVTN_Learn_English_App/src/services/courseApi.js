import { callBackend } from "../configs/ConfigBE";
const courseApi = {
  fetchCourse: async () => {
    const res = await callBackend(`/course`, "GET");
    if (res && Array.isArray(res.data)) return res.data;
    if (res && Array.isArray(res.data?.data)) return res.data.data;
    return [];
  },
  fetchCourseById: async (courseId) => {
    const res = await callBackend(`/course/${courseId}`, "GET");
    // kiểm tra kỹ để tránh crash
    if (!res) return null;
    if (res.data?.data) return res.data.data; // trả về khóa học trực tiếp
    if (res.data) return res.data; // fallback
    return null;
  },
};

export default courseApi;
