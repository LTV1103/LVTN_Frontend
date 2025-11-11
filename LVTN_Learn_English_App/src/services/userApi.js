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
  },
  loginUser: async (username, password) => {
    try {
      const res = await callBackend("/user/auth/login", "POST", {
        username,
        password,
      });
      return res;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Đăng nhập thất bại");
    }
  },
  logoutUser: async (token) => {
    try {
      const res = await callBackend("/auth/logout", "POST", null, {
        Authorization: `Bearer ${token}`,
      });
      return res.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Logout thất bại");
    }
  },
};

export default userApi;
