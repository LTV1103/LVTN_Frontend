import { callBackend } from "../configs/ConfigBE";
const vocabularyApi = {
  fetchVocabulary: async () => {
    const res = await callBackend("/vocabulary", "GET");
    if (!res) return null;
    //lay phan data trong JSON
    if (res.data?.data) return res.data.data;
    //lay toan bo JSON
    if (res.data) return res.data;
    return null;
  },

  fetchVocabularyByID: async (id) => {
    const res = await callBackend(`/vocabulary/${id}`, "GET");
    if (!res) return null;
    if (res.data?.data) return res.data.data;
    if (res.data) return res.data;
    return null;
  },

  createVocabulary: async (courseData) => {
    const res = await callBackend("/vocabulary", "POST", courseData);
    if (res?.status === 201 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  updateVocabulary: async (id, courseData) => {
    const res = await callBackend(`/vocabulary/${id}`, "PUT", courseData);
    if (res?.status === 200 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  deleteVocabulary: async (id) => {
    const res = await callBackend(`/vocabulary/${id}`, "DELETE");
    if (res?.status === 200) return true;
    throw new Error(res?.message);
  },
};

export default vocabularyApi;
