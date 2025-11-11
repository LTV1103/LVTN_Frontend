import { useState } from "react";
import BTN_DangNhap from "../UI/Button/btn_dangnhap";
import MOD_DangNhap from "../UI/Modal/mod_dangnhap";

export default function Xuly_DangNhap() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BTN_DangNhap onClick={() => setIsOpen(true)} />
      <MOD_DangNhap isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
