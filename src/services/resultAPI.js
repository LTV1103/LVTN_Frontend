import { callBackend } from "../configs/ConfigBE";
const resultApi = {
  fetchResult: async () => {
    const res = await callBackend("/result", "GET");
    if (!res) return null;
    //lay phan data trong JSON
    if (res.data?.data) return res.data.data;
    //lay toan bo JSON
    if (res.data) return res.data;
    return null;
  },

  fetchResultByID: async (id) => {
    const res = await callBackend(`/result/${id}`, "GET");
    if (!res) return null;
    if (res.data?.data) return res.data.data;
    if (res.data) return res.data;
    return null;
  },

  createResult: async (courseData) => {
    const res = await callBackend("/result", "POST", courseData);
    if (res?.status === 201 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  updateResult: async (id, courseData) => {
    const res = await callBackend(`/result/${id}`, "PUT", courseData);
    if (res?.status === 200 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  deleteResult: async (id) => {
    const res = await callBackend(`/result/${id}`, "DELETE");
    if (res?.status === 200) return true;
    throw new Error(res?.message);
  },
};

export default resultApi;
