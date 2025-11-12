import { useState, useEffect } from "react";
import "./head.styles.css";
import phoneIcon from '../../../assets/icons/react.svg';
import Xuly_DangKy from "../../Logic/btn_Login.jsx";
import Xuly_DangNhap from "../../Logic/btn_Res.jsx";

export default function Header_Index() {
  const [hideTop, setHideTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setHideTop(true);
      else setHideTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header fixed-top bg-white shadow-sm">
      {/* PHẦN TRÊN */}
      <div className={`header-top py-2 ${hideTop ? "hide" : ""}`}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-telephone"></i>
            <img src={phoneIcon} alt="React Icon" height="24" />
            <span className="fw-bold text-info">DH52112127</span>
          </div>

          <div className="d-flex align-items-center gap-1">     
            <form className="d-flex">
              <input
                type="search"
                className="form-control search-box"
                placeholder="Bạn muốn tìm kiếm khóa học gì?"
              />
            </form>
            <Xuly_DangNhap />
            <Xuly_DangKy />
          </div>
        </div>
      </div>

      {/* PHẦN DƯỚI */}
      <div className="header-bottom py-2 border-top">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <span className="fw-bold text-warning">Learn_English_App</span>
          </div>

          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#">
                Giới thiệu chung
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#">
                Chương trình học
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#">
                Khóa Học
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-semibold" href="#">
                Tin tức
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
