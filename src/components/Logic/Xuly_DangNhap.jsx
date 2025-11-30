import { useState } from "react";
import BTN_DangNhap from "../UI/Button/btn_dangnhap";
import MOD_DangNhap from "../UI/Modal/mod_dangnhap";
import {loginUser} from '../event/DangNhap';
import { useNavigate } from "react-router-dom";

export default function Xuly_DangNhap() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

const handleLogin = async (username,password) => { // nhận 1 object duy nhất
  try {
    const result = await loginUser(username, password);

    if (!result.success) {
      setError("Đăng nhập thất bại!");
      return;
    }

    setError("");
    setIsOpen(false);

    const role = result.user.role;
    console.log(role);

    if (role === "admin") navigate("/admin");
    else navigate("/homeuser");

  } catch (err) {
    console.error(err);
    setError(err.message || "Đăng nhập thất bại");
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
