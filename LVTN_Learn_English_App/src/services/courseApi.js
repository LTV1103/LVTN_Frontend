import { callBackend } from "../configs/ConfigBE";
const courseApi = {
  //Lay toan bo
  fetchCourse: async () => {
    const res = await callBackend("/course", "GET");
    if (!res) return null;
    //lay phan data trong JSON
    if (res.data?.data) return res.data.data;
    //lay toan bo JSON
    if (res.data) return res.data;
    return null;
  },

  //Lay user theo ID
  fetchCourseByID: async (id) => {
    const res = await callBackend(`/course/${id}`, "GET");
    if (!res) return null;
    //lay phan data trong JSON
    if (res.data?.data) return res.data.data;
    //lay toan bo JSON
    if (res.data) return res.data;
    return null;
  },
  //Lay khoa hoc ma nguoi dung da mua
  fetchCourseByUser: async (id) => {
    const res = await callBackend(`/course/users/${id}`, "GET");
    if (!res) return null;
    //lay phan data trong JSON
    if (res.data?.data) return res.data.data;
    //lay toan bo JSON
    if (res.data) return res.data;
    return null;
  },

  //Tao moi khao hoc
  createCourse: async (courseData) => {
    const res = await callBackend("/course", "POST", courseData);
    if (res?.status === 201 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  //Cap nhat nguoi dung
  updateCourse: async (id, courseData) => {
    const res = await callBackend(`/course/${id}`, "PUT", courseData);
    if (res?.status === 200 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  //Xoa nguoi dung
  deleteCourse: async (id) => {
    const res = await callBackend(`/course/${id}`, "DELETE");
    if (res?.status === 200) return true;
    throw new Error(res?.message);
  },
};

export default courseApi;
