import { callBackend } from "../configs/ConfigBE";
const progressApi = {
  fetchProgress: async () => {
    const res = await callBackend("/progress", "GET");
    if (!res) return null;
    //lay phan data trong JSON
    if (res.data?.data) return res.data.data;
    //lay toan bo JSON
    if (res.data) return res.data;
    return null;
  },

  fetchProgressByID: async (id) => {
    const res = await callBackend(`/progress/${id}`, "GET");
    if (!res) return null;
    if (res.data?.data) return res.data.data;
    if (res.data) return res.data;
    return null;
  },

  createProgress: async (courseData) => {
    const res = await callBackend("/progress", "POST", courseData);
    if (res?.status === 201 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  updateProgress: async (id, courseData) => {
    const res = await callBackend(`/progress/${id}`, "PUT", courseData);
    if (res?.status === 200 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  deleteProgress: async (id) => {
    const res = await callBackend(`/progress/${id}`, "DELETE");
    if (res?.status === 200) return true;
    throw new Error(res?.message);
  },
};

export default progressApi;
