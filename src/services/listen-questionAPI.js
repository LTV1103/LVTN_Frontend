import { callBackend } from "../configs/ConfigBE";
const listenQuestionApi = {
  fetchListen: async () => {
    const res = await callBackend("/listen-question", "GET");
    if (!res) return null;
    //lay phan data trong JSON
    if (res.data?.data) return res.data.data;
    //lay toan bo JSON
    if (res.data) return res.data;
    return null;
  },

  fetchListenByID: async (id) => {
    const res = await callBackend(`/listen-question/${id}`, "GET");
    if (!res) return null;
    if (res.data?.data) return res.data.data;
    if (res.data) return res.data;
    return null;
  },

  createListen: async (courseData) => {
    const res = await callBackend("/listen-question", "POST", courseData);
    if (res?.status === 201 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  updateListen: async (id, courseData) => {
    const res = await callBackend(`/listen-question/${id}`, "PUT", courseData);
    if (res?.status === 200 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  deleteListen: async (id) => {
    const res = await callBackend(`/listen-question/${id}`, "DELETE");
    if (res?.status === 200) return true;
    throw new Error(res?.message);
  },
};

export default listenQuestionApi;
