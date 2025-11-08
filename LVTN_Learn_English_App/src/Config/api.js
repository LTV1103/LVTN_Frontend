import { callBackend } from "./ConfigBE";

const Api = {
  fetchUsers: async () => {
    const res = await callBackend("/user", "GET");
    if (res && Array.isArray(res.data)) return res.data;
    if (res && Array.isArray(res.data?.data)) return res.data.data;
    return [];
  },
  fetchCourse: async () => {
    const res = await callBackend("/course", "GET");
    if (res && Array.isArray(res.data)) return res.data;
    if (res && Array.isArray(res.data?.data)) return res.data.data;
    return [];
  },
};

export default Api;
