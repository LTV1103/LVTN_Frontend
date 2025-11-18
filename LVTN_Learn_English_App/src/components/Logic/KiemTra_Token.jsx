import { Navigate } from "react-router-dom";

export default function KiemTraToken({ children }) {
  const token = localStorage.getItem("refreshToken");

  if (!token) {
    // Không có token → redirect về login
    return <Navigate to="/" replace />;
  }

  return children;
}
