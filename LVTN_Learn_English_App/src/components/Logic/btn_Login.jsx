import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BTN_DangNhap from "../UI/Button/btn_dangnhap";
import MOD_DangNhap from "../UI/Modal/mod_dangnhap";
import userApi from '../../services/userApi';

export default function Xuly_DangNhap() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // hook navigate

const handleLogin = async ({ username, password }) => {
  try {
    const res = await userApi.loginUser(username, password);
    console.log("Login response:", res);

    const loggedUser = res.data; // res.data chính là object { role, name, accessToken... }

    setUser(loggedUser); 
    setError("");
    setIsOpen(false);

    if (loggedUser.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/homeuser");
    }
  } catch (err) {
    setError(err.response?.data?.message || err.message || "Đăng nhập thất bại");
  }
};

  return (
    <>
      <BTN_DangNhap onClick={() => setIsOpen(true)} />

      <MOD_DangNhap
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleLogin}
      />

      {error && <div className="alert alert-danger mt-2">{error}</div>}
      {user && <div className="mt-2">Xin chào, {user.role}</div>}
    </>
  );
}
