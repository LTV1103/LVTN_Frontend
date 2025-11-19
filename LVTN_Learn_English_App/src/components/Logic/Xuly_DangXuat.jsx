import userApi from "../../services/userApi";

// export thẳng hàm logout
export const logoutUser = async () => {
  const confirmLogout = window.confirm("Bạn có chắc muốn đăng xuất không?");
  if (!confirmLogout) return false;

  try {
    const token = localStorage.getItem("accessToken");
    if (token) await userApi.logoutUser(token);
    localStorage.clear();
    sessionStorage.clear();
    console.log("Đăng xuất thành công");
    return true;
  } catch (err) {
    console.error("Logout error:", err);
    alert("Đăng xuất thất bại: " + err.message);
    return false;
  }
};
