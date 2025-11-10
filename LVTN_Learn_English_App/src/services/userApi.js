import { callBackend } from "../configs/ConfigBE";

const userApi = {
  fetchUsers: async () => {
    const res = await callBackend(`/user`, "GET");
    if (res && Array.isArray(res.data)) return res.data;
    if (res && Array.isArray(res.data?.data)) return res.data.data;
    return [];
  },
  fetchUsersbyID: async (id) => {
  const res = await callBackend(`/user/${id}`, "GET");
  if (res && Array.isArray(res.data)) return res.data;
    if (res && Array.isArray(res.data?.data)) return res.data.data;
    return [];
  }

};

export default userApi;
