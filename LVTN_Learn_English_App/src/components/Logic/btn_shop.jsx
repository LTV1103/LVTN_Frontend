import { useNavigate } from "react-router-dom";
import BTN_GioHang from "../UI/Button/btn_giohang";

export default function Xuly_GioHang() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop");
  };

  return (
    <BTN_GioHang onClick={handleClick} />
  );
}