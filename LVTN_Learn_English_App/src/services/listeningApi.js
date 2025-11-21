import { callBackend } from "../configs/ConfigBE";
const listenApi = {
  fetchListen: async () => {
    const res = await callBackend("/listening", "GET");
    if (!res) return null;
    //lay phan data trong JSON
    if (res.data?.data) return res.data.data;
    //lay toan bo JSON
    if (res.data) return res.data;
    return null;
  },

  fetchListenByID: async (id) => {
    const res = await callBackend(`/listening/${id}`, "GET");
    if (!res) return null;
    if (res.data?.data) return res.data.data;
    if (res.data) return res.data;
    return null;
  },

  createListen: async (courseData) => {
    const res = await callBackend("/listening", "POST", courseData);
    if (res?.status === 201 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  updateListen: async (id, courseData) => {
    const res = await callBackend(`/listening/${id}`, "PUT", courseData);
    if (res?.status === 200 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  deleteListen: async (id) => {
    const res = await callBackend(`/listening/${id}`, "DELETE");
    if (res?.status === 200) return true;
    throw new Error(res?.message);
  },
};

export default listenApi;
