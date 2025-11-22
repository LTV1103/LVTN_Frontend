import userApi from "../../services/userApi";

export const loginUser = async (username, password) => {
  try {
    const res = await userApi.loginUser(username, password);

    // Nếu API trả về res.data.data thì lấy đúng như vậy
    const data = res.data?.data || res.data;

    // Lưu token vào localStorage
    localStorage.setItem("id", data.id);
    localStorage.setItem("user", data.user);
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    localStorage.setItem("role", data.role);

    console.log("Đăng nhập thành công!");
    return {
      success: true,
      user: { id: data.id, user: data.user, role: data.role },
    };
  } catch (err) {
    console.error("Login error:", err);
    alert(
      "Đăng nhập thất bại: " + (err.response?.data?.message || err.message)
    );
    return { success: false, error: err };
  }
};
