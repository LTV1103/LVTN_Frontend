// src/services/dangky.js
import userApi from "../../services/userApi";

export const dangKyUser = async (form) => {
  try {
    const res = await userApi.createUser(form);
    const data = res.data?.data || res.data;

    console.log("Người dùng mới:", data);
    return { success: true, user: data };
  } catch (err) {
    console.error("Lỗi khi đăng ký:", err);
    return { success: false, error: err.message || "Đăng ký thất bại" };
  }
};
