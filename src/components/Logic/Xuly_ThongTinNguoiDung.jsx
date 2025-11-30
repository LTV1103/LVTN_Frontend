import { useNavigate } from "react-router-dom";
import BTN_TTNGuoiDung from "../UI/Button/btn_thongtinnguoidung";
import { logoutUser } from "../event/DangXuat.js"; // import hàm logout

export default function Xuly_ThongTinNguoiDung() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/infouser");
  };

  const handleLogout = async () => {
    const didLogout = await logoutUser(); // gọi thẳng hàm logout
    if (didLogout) navigate("/"); // redirect về trang index/home nếu logout thành công
  };

  return <BTN_TTNGuoiDung onClick={handleClick} onLogout={handleLogout} />;
}
