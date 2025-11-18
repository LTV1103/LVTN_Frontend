import { useState, useEffect } from "react";
import "./head.styles.css";
import phoneIcon from '../../../assets/icons/react.svg';
import Xuly_ThongTinKhoaHoc from "../../Logic/btn_info_course.jsx";
import Xuly_ThongTinNguoiDung from "../../Logic/btn_info_user.jsx";
import Xuly_GioHang from "../../Logic/btn_shop.jsx";


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
      {/* PHẦN TRÊN: phone (left) - search (center) - auth (right) */}
      <div className={`header-top py-2 ${hideTop ? "hide" : ""}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-auto d-flex align-items-center gap-2">
              <i className="bi bi-telephone"></i>
              <span className="fw-bold text-warning">LƯƠNG TRIỀU VỸ</span>
            </div>

            <div className="col d-flex justify-content-center">
              <form className="d-flex w-100 justify-content-center">
                <input
                  type="search"
                  className="form-control search-box"
                  placeholder="Bạn muốn tìm kiếm khóa học gì?"
                />
              </form>
            </div>
            <div className="col-auto d-flex align-items-center gap-1">
              <Xuly_GioHang />
              <Xuly_ThongTinNguoiDung />
            </div>
          </div>
        </div>
      </div>

      {/* PHẦN DƯỚI: logo (left) - nav centered */}
      <div className="header-bottom py-2 border-top">
        <div className="container position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img src={phoneIcon} alt="phone" height="30" />
              <span className="fw-bold text-info">DH52112127</span>
            </div>

            {/* center nav placed with absolute centering in CSS */}
            <nav className="center-block">
              <ul className="nav center-nav">
                <li className="nav-item">
                  <a className="nav-link text-dark fw-semibold" href="/homeuser#about">
                    Giới thiệu chung
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark fw-semibold" href="/homeuser#programs">
                    Chương trình học
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark fw-semibold" href="/homeuser#courses">
                    Khóa Học
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark fw-semibold" href="/homeuser#news">
                    Tin tức
                  </a>
                </li>
              </ul>
            </nav>
            <div className="col-auto d-flex align-items-center gap-1" style={{ width: 48 }} />
              <Xuly_ThongTinKhoaHoc />
          </div>
        </div>
      </div>
    </header>
  );
}
