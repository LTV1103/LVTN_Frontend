import { useState } from "react";
import BTN_DangKy from "../UI/Button/btn_dangky";
import MOD_DangKy from "../UI/Modal/mod_dangky";
import userApi from "../../services/userApi";

export default function Xuly_DangKy() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (form) => {
    try {
      const newUser = await userApi.createUser(form);
      console.log("Người dùng mới:", newUser);
      alert("Đăng ký thành công! Bạn sẽ được đăng nhập ngay.");
      setIsOpen(false);
    } catch (err) {
      console.error("Lỗi khi đăng ký:", err);
      alert(err.message || "Có lỗi xảy ra, thử lại!");
      setError(err.message);
    }
  };
  return (
    <>
      <BTN_DangKy onClick={() => setIsOpen(true)} />
      <MOD_DangKy
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        error={error}
      />
    </>
  );
}
