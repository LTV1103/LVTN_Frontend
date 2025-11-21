import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function KiemTraToken({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!token) {
      alert("Vui lòng đăng nhập");
      navigate("/"); // gọi trong useEffect mới chạy ngay
    }
  }, [token, navigate]);

  // Nếu token không có, component vẫn render nhưng user sẽ bị redirect
  return token ? children : null;
}
