import { callBackend } from "../configs/ConfigBE";
const questionApi = {
  fetchQues: async () => {
    const res = await callBackend("/question", "GET");
    if (!res) return null;
    //lay phan data trong JSON
    if (res.data?.data) return res.data.data;
    //lay toan bo JSON
    if (res.data) return res.data;
    return null;
  },

  fetchQuesByID: async (id) => {
    const res = await callBackend(`/question/${id}`, "GET");
    if (!res) return null;
    if (res.data?.data) return res.data.data;
    if (res.data) return res.data;
    return null;
  },

  createQues: async (courseData) => {
    const res = await callBackend("/question", "POST", courseData);
    if (res?.status === 201 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  updateQues: async (id, courseData) => {
    const res = await callBackend(`/question/${id}`, "PUT", courseData);
    if (res?.status === 200 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  deleteQues: async (id) => {
    const res = await callBackend(`/question/${id}`, "DELETE");
    if (res?.status === 200) return true;
    throw new Error(res?.message);
  },
};

export default questionApi;
