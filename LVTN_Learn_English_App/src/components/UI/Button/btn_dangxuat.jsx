import './button.styles.css';
import {logoutUser} from '../../event/DangXuat.js';

export default function BTN_DangXuat() {
  const handleClick = async (e) => {
    e.preventDefault();
    const success = await logoutUser();
    if (success) {
      window.location.href = '/';
    }
  };

  return (
    <button
      type="button"
      className="dropdown-item"
      onClick={handleClick}
    >
      Đăng xuất
    </button>
  );
}
