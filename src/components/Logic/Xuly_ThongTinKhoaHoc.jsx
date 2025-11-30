import { useNavigate } from "react-router-dom";
import Btn_InfoUser from "../UI/Button/btn_khoahocnguoidung";

export default function Xuly_ThongTinKhoaHoc() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/info");
  };

  return (
    <Btn_InfoUser onClick={handleClick} />
  );
}
