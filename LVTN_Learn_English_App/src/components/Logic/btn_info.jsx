import { useNavigate } from "react-router-dom";
import Btn_InfoUser from "../UI/Button/btn_thongtin";

export default function Xuly_ThongTin() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/info");
  };

  return (
    <Btn_InfoUser onClick={handleClick} />
  );
}
