import { callBackend } from "../configs/ConfigBE";
const courseApi = {
  fetchCourse: async () => {
    const res = await callBackend(`/course`, "GET");
    if (res && Array.isArray(res.data)) return res.data;
    if (res && Array.isArray(res.data?.data)) return res.data.data;
    return [];
  },
};

export default courseApi;
