import axios from "axios";

/**
 * Hàm kết nối backend và gọi các API khác nhau
 * @param {string} endpoint - endpoint backend, ví dụ "/users" hoặc "/auth/login"
 * @param {string} method - "GET", "POST", "PUT", "DELETE"
 * @param {object} data - dữ liệu gửi đi (dành cho POST/PUT)
 * @returns {Promise<any>} trả về dữ liệu backend
 */
export const callBackend = async (endpoint, method = "GET", data = null) => {
  const baseURL = "http://localhost:8080"; // backend của bạn
  const url = `${baseURL}${endpoint}`;

  try {
    const config = {
      method,
      url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data ? JSON.stringify(data) : null,
    };

    const res = await axios(config);
    return res.data; // trả về object { status, message, data }
  } catch (err) {
    console.error(`Lỗi gọi backend (${method} ${endpoint}):`, err.message);
    return null;
  }
};
export default callBackend;

