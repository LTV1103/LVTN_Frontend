import axios from "axios";

/**
 * Hàm kết nối backend và gọi các API khác nhau
 * @param {string} endpoint - endpoint backend, ví dụ "/users" hoặc "/auth/login"
 * @param {string} method - "GET", "POST", "PUT", "DELETE"
 * @param {object} data - dữ liệu gửi đi (dành cho POST/PUT)
 * @returns {Promise<any>} trả về dữ liệu backend
 */

export const callBackend = async (
  endpoint,
  method = "GET",
  data = null,
  extraHeaders = {}
) => {
  const baseURL = "http://localhost:8080";
  const url = `${baseURL}${endpoint}`;

  try {
    const config = {
      method,
      url,
      headers: {
        "Content-Type": "application/json",
        ...extraHeaders, // gửi token nếu có
      },
      data: data || undefined,
    };

    const res = await axios(config);
    return res.data; // backend trả {status, message, data}
  } catch (err) {
    console.error(
      `Lỗi gọi backend (${method} ${endpoint}):`,
      err.response?.data || err.message
    );
    return err.response?.data;
  }
};
export default callBackend;
