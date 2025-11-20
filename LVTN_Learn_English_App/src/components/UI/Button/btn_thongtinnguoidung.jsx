import { useEffect, useState } from 'react';
import '../Button/button.styles.css';
import BTN_DangXuat from './btn_dangxuat';
import personIcon from '../../../assets/icons/person.svg';

export default function BTN_TTNGuoiDung({ onClick}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('user');
    const storedEmail = localStorage.getItem('email');
    setUsername(storedUsername || '');
    setEmail(storedEmail || '');
  }, []);

  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn-cart-circle dropdown-toggle no-arrow"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        title="Thông tin người dùng"
      >
        <img src={personIcon} alt="person" height="24" />
      </button>

      <ul className="dropdown-menu dropdown-menu-end">
        <li className="px-3 py-2 border-bottom">
          <small className="text-muted">Tài khoản</small>
          <div className="fw-semibold text-dark">{username}</div>
          <small className="text-muted">{email}</small>
        </li>
        <li>
          <a className="dropdown-item" onClick={onClick}>
            Thông tin tài khoản
          </a>
        </li>
        <li>
          <BTN_DangXuat/>
        </li>
      </ul>
    </div>
  );
}
