import { callBackend } from "../configs/ConfigBE";
const grammarApi = {
  fetchGrammar: async () => {
    const res = await callBackend("/grammar", "GET");
    if (!res) return null;
    //lay phan data trong JSON
    if (res.data?.data) return res.data.data;
    //lay toan bo JSON
    if (res.data) return res.data;
    return null;
  },

  fetchGrammarByID: async (id) => {
    const res = await callBackend(`/grammar/${id}`, "GET");
    if (!res) return null;
    if (res.data?.data) return res.data.data;
    if (res.data) return res.data;
    return null;
  },

  createGrammar: async (courseData) => {
    const res = await callBackend("/grammar", "POST", courseData);
    if (res?.status === 201 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  updateGrammar: async (id, courseData) => {
    const res = await callBackend(`/grammar/${id}`, "PUT", courseData);
    if (res?.status === 200 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  deleteGrammar: async (id) => {
    const res = await callBackend(`/grammar/${id}`, "DELETE");
    if (res?.status === 200) return true;
    throw new Error(res?.message);
  },
};

export default grammarApi;
