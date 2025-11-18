import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BTN_DangNhap from "../UI/Button/btn_dangnhap";
import MOD_DangNhap from "../UI/Modal/mod_dangnhap";
import userApi from '../../services/userApi';

export default function Xuly_DangNhap() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // hook navigate

const handleLogin = async ({ username, password }) => {
  try {
    const loggedUser = await userApi.loginUser(username, password);
    setError("");
    setIsOpen(false);

    localStorage.setItem("accessToken", loggedUser.data.accessToken);
    localStorage.setItem("refreshToken", loggedUser.data.refreshToken);
    localStorage.setItem("role", loggedUser.data.role);
    if (loggedUser.data.role === "admin") navigate("/admin");
    else navigate("/homeuser");

  } catch (err) {
    setError(err.message);
  }
};
  return (
    <>
      <BTN_DangNhap onClick={() => setIsOpen(true)} />

      <MOD_DangNhap
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleLogin}
        error={error}
      />
    </>
  );
}
