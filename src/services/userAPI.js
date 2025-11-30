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
    if (!res) return null;
    if (res.data?.data) return res.data.data; // trả về khóa học trực tiếp
    if (res.data) return res.data; // fallback
    return null;
  },
  loginUser: async (email, password) => {
    const res = await callBackend("/user/auth/login", "POST", {
      email,
      password,
    });
    if (res?.status === 200 && res?.data) return res; // trả luôn object có status + data
    throw new Error(res?.message || "Đăng nhập thất bại");
  },
  logoutUser: async (token) => {
    if (!token) throw new Error("Token không tồn tại");

    const res = await callBackend("/user/auth/logout", "POST", null, {
      Authorization: `Bearer ${token}`,
    });

    if (res?.status === 200) return res.data;
    throw new Error(res?.message || "Đăng xuất thất bại");
  },
  createUser: async (userData) => {
    const res = await callBackend("/user", "POST", userData);
    if (res?.status === 201 && res?.data) return res.data;
    throw new Error(res?.message || "Tạo người dùng thất bại");
  },
  updateUser: async (id, userData) => {
    const res = await callBackend(`/user/${id}`, "PUT", userData);
    if (res?.status === 200 && res?.data) return res.data;
    throw new Error(res?.message || "Cập nhật người dùng thất bại");
  },
  deleteUser: async (id) => {
    const res = await callBackend(`/user/${id}`, "DELETE");
    if (res?.status === 200) return true;
    throw new Error(res?.message || "Xóa người dùng thất bại");
  },
};
export default userApi;
