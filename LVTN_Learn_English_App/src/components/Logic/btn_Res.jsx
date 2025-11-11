import { useState } from "react";
import BTN_DangKy from "../UI/Button/btn_dangky";
import MOD_DangKy from "../UI/Modal/mod_dangky";

export default function Xuly_DangKy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BTN_DangKy onClick={() => setIsOpen(true)} />
      <MOD_DangKy isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
