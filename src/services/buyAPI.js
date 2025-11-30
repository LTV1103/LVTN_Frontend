import { callBackend } from "../configs/ConfigBE";
const userCourseApi = {
  fetchUserCourse: async () => {
    const res = await callBackend("/user-course", "GET");
    if (!res) return null;
    //lay phan data trong JSON
    if (res.data?.data) return res.data.data;
    //lay toan bo JSON
    if (res.data) return res.data;
    return null;
  },

  fetchUserCourseByID: async (id) => {
    const res = await callBackend(`/user-course/${id}`, "GET");
    if (!res) return null;
    if (res.data?.data) return res.data.data;
    if (res.data) return res.data;
    return null;
  },

  createUserCourse: async (courseData) => {
    const res = await callBackend("/user-course", "POST", courseData);
    if (res?.status === 201 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  updateUserCourse: async (id, courseData) => {
    const res = await callBackend(`/user-course/${id}`, "PUT", courseData);
    if (res?.status === 200 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  deleteUserCourse: async (id) => {
    const res = await callBackend(`/user-course/${id}`, "DELETE");
    if (res?.status === 200) return true;
    throw new Error(res?.message);
  },
};

export default userCourseApi;
