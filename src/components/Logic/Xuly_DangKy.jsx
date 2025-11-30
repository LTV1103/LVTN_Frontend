import { useState } from "react"; 
import BTN_DangKy from "../UI/Button/btn_dangky"; 
import MOD_DangKy from "../UI/Modal/mod_dangky"; 
import { dangKyUser } from "../event/dangky";
export default function Xuly_DangKy() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (form) => {
    const result = await dangKyUser(form);

    if (result.success) {
      alert("Đăng ký thành công!");
      setIsOpen(false);
    } else {
      setError(result.error);
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
