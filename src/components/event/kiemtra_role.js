import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function KiemTraRoleAdmin({ children }) {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (role === 'user') {
      alert("Bạn không được phép vào trang này");
      navigate("/home"); // redirect chuẩn React Router
    }
  }, [role, navigate]);

  // Chỉ render children nếu là admin
  return role === 'admin' ? children : null;
}
