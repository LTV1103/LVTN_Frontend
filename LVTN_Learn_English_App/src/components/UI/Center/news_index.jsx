import './center.styles.css';
export default function News_Index(){
    return(
            <div id="news" className="section-news">
          <div className="news-container">
            <div className="news-card">
              <div className="news-header">
                <span className="news-date">13/11/2025</span>
                <span className="news-category">Khóa học</span>
              </div>
              <h4>Khóa học Speaking Fluency đã được cập nhật</h4>
              <p>Chúng tôi vừa cập nhật khóa học Speaking với 50 bài học mới, hơn 200 bài tập thực hành và 100+ video giao tiếp thực tế.</p>
              <a href="#" className="read-more">Đọc thêm →</a>
            </div>
            
            <div className="news-card">
              <div className="news-header">
                <span className="news-date">10/11/2025</span>
                <span className="news-category">Sự kiện</span>
              </div>
              <h4>Trao giải cuộc thi Speaking tháng 11</h4>
              <p>Chúc mừng những học viên xuất sắc đã đạt điểm cao trong cuộc thi luyện nói tiếng Anh với chủ đề "Công nghệ và cuộc sống".</p>
              <a href="#" className="read-more">Đọc thêm →</a>
            </div>
            
            <div className="news-card">
              <div className="news-header">
                <span className="news-date">05/11/2025</span>
                <span className="news-category">Thông báo</span>
              </div>
              <h4>Mở lớp học nhóm trực tiếp hàng tuần</h4>
              <p>Từ tháng 11, chúng tôi mở thêm các lớp học nhóm trực tiếp với giáo viên bản xứ vào buổi tối thứ 3, 4, 5 hàng tuần.</p>
              <a href="#" className="read-more">Đọc thêm →</a>
            </div>
          </div>
        </div>
    );
}   