import { callBackend } from "../configs/ConfigBE";
const saveVocabularyApi = {
  fetchPaymentCourse: async () => {
    const res = await callBackend("/save", "GET");
    if (!res) return null;
    if (res.data?.data) return res.data.data;
    if (res.data) return res.data;
    return null;
  },

  fetchPaymentCourseID: async (id) => {
    const res = await callBackend(`/save/${id}`, "GET");
    if (!res) return null;
    if (res.data?.data) return res.data.data;
    if (res.data) return res.data;
    return null;
  },

  createPaymentCourse: async (Data) => {
    const res = await callBackend("/save", "POST", Data);
    if (res?.status === 201 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  updatePaymentCourse: async (id, Data) => {
    const res = await callBackend(`/save/${id}`, "PUT", Data);
    if (res?.status === 200 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  deletePaymentCourse: async (id) => {
    const res = await callBackend(`/save/${id}`, "DELETE");
    if (res?.status === 200) return true;
    throw new Error(res?.message);
  },
};

export default saveVocabularyApi;
