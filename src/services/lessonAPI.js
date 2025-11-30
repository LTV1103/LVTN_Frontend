import { callBackend } from "../configs/ConfigBE";
const lessonApi = {
  fetchLesson: async () => {
    const res = await callBackend("/lesson", "GET");
    if (!res) return null;
    //lay phan data trong JSON
    if (res.data?.data) return res.data.data;
    //lay toan bo JSON
    if (res.data) return res.data;
    return null;
  },

  fetchLessonByID: async (id) => {
    const res = await callBackend(`/lesson/${id}`, "GET");
    if (!res) return null;
    if (res.data?.data) return res.data.data;
    if (res.data) return res.data;
    return null;
  },

  createLesson: async (courseData) => {
    const res = await callBackend("/lesson", "POST", courseData);
    if (res?.status === 201 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  updateLesson: async (id, courseData) => {
    const res = await callBackend(`/lesson/${id}`, "PUT", courseData);
    if (res?.status === 200 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  deleteLesson: async (id) => {
    const res = await callBackend(`/lesson/${id}`, "DELETE");
    if (res?.status === 200) return true;
    throw new Error(res?.message);
  },
};

export default lessonApi;
