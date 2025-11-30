import { useNavigate, useLocation } from "react-router-dom";
import BTN_ChuyenTrang from "../UI/Button/btn_chuyentrang";

export default function Xuly_ChuyenTrang() {
  const navigate = useNavigate();
  const location = useLocation(); // lấy đường dẫn hiện tại

  const handleClick = () => {
    // Nếu đang ở trang admin thì chuyển sang homeuser
    if (location.pathname.startsWith("/admin")) {      
        navigate("/homeuser");
    } else {
      // Ngược lại nếu đang ở homeuser thì chuyển sang admin
      navigate("/admin");
    }
  };

  return <BTN_ChuyenTrang onClick={handleClick} />;
}
 