import { useNavigate } from "react-router-dom";
import Btn_TTNGuoiDung from "../UI/Button/btn_thongtinnguoidung";

export default function Xuly_ThongTinNguoiDung() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/infouser");
  };

  return (
    <Btn_TTNGuoiDung onClick={handleClick} />
  );
}