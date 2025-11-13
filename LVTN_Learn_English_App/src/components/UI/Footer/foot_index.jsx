import '../Footer/foot.styles.css'

export default function Footer_Index() {
  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="row g-4">
            {/* Cột 1: Về chúng tôi */}
            <div className="col-md-3 col-sm-6">
              <h5 className="footer-title">Về chúng tôi</h5>
              <p className="footer-text">
                LearnEnglish App - Nền tảng học tiếng Anh chất lượng cao, giúp bạn đạt mục tiêu ngôn ngữ.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link"><i className="bi bi-facebook"></i></a>
                <a href="#" className="social-link"><i className="bi bi-twitter"></i></a>
                <a href="#" className="social-link"><i className="bi bi-instagram"></i></a>
                <a href="#" className="social-link"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            {/* Cột 2: Chương trình học */}
            <div className="col-md-3 col-sm-6">
              <h5 className="footer-title">Chương trình học</h5>
              <ul className="footer-links">
                <li><a href="#">Beginner (A1-A2)</a></li>
                <li><a href="#">Elementary (B1-B2)</a></li>
                <li><a href="#">Advanced (C1-C2)</a></li>
                <li><a href="#">Luyện thi TOEIC</a></li>
                <li><a href="#">Luyện thi IELTS</a></li>
              </ul>
            </div>

            {/* Cột 3: Liên hệ */}
            <div className="col-md-3 col-sm-6">
              <h5 className="footer-title">Liên hệ</h5>
              <ul className="footer-contact">
                <li>
                  <i className="bi bi-telephone"></i>
                  <span>1900 636 929</span>
                </li>
                <li>
                  <i className="bi bi-envelope"></i>
                  <a href="mailto:support@learnenglish.vn">support@learnenglish.vn</a>
                </li>
                <li>
                  <i className="bi bi-geo-alt"></i>
                  <span>123 Đường Nguyễn Huệ, Hà Nội, Việt Nam</span>
                </li>
              </ul>
            </div>

            {/* Cột 4: Hỗ trợ */}
            <div className="col-md-3 col-sm-6">
              <h5 className="footer-title">Hỗ trợ</h5>
              <ul className="footer-links">
                <li><a href="#">Câu hỏi thường gặp</a></li>
                <li><a href="#">Điều khoản dịch vụ</a></li>
                <li><a href="#">Chính sách bảo mật</a></li>
                <li><a href="#">Liên hệ hỗ trợ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom / Copyright */}
      <div className="footer-bottom">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <p className="mb-0 footer-copyright">
              © 2025 LearnEnglish App. Tất cả các quyền được bảo lưu.
            </p>
            <div className="footer-bottom-links">
              <a href="#">Chính sách bảo mật</a>
              <span className="divider">|</span>
              <a href="#">Điều khoản sử dụng</a>
              <span className="divider">|</span>
              <a href="#">Liên hệ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
