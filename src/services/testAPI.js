import { callBackend } from "../configs/ConfigBE";
const testApi = {
  fetchTest: async () => {
    const res = await callBackend("/test", "GET");
    if (!res) return null;
    //lay phan data trong JSON
    if (res.data?.data) return res.data.data;
    //lay toan bo JSON
    if (res.data) return res.data;
    return null;
  },

  fetchTestByID: async (id) => {
    const res = await callBackend(`/test/${id}`, "GET");
    if (!res) return null;
    if (res.data?.data) return res.data.data;
    if (res.data) return res.data;
    return null;
  },

  createTest: async (courseData) => {
    const res = await callBackend("/test", "POST", courseData);
    if (res?.status === 201 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  updateTest: async (id, courseData) => {
    const res = await callBackend(`/test/${id}`, "PUT", courseData);
    if (res?.status === 200 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  deleteTest: async (id) => {
    const res = await callBackend(`/test/${id}`, "DELETE");
    if (res?.status === 200) return true;
    throw new Error(res?.message);
  },
};

export default testApi;
