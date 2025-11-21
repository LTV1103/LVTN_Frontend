import { callBackend } from "../configs/ConfigBE";
const readApi = {
  fetchRead: async () => {
    const res = await callBackend("/reading", "GET");
    if (!res) return null;
    //lay phan data trong JSON
    if (res.data?.data) return res.data.data;
    //lay toan bo JSON
    if (res.data) return res.data;
    return null;
  },

  fetchReadByID: async (id) => {
    const res = await callBackend(`/reading/${id}`, "GET");
    if (!res) return null;
    if (res.data?.data) return res.data.data;
    if (res.data) return res.data;
    return null;
  },

  createRead: async (courseData) => {
    const res = await callBackend("/reading", "POST", courseData);
    if (res?.status === 201 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  updateRead: async (id, courseData) => {
    const res = await callBackend(`/reading/${id}`, "PUT", courseData);
    if (res?.status === 200 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  deleteRead: async (id) => {
    const res = await callBackend(`/reading/${id}`, "DELETE");
    if (res?.status === 200) return true;
    throw new Error(res?.message);
  },
};

export default readApi;
