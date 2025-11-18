import './center.styles.css';
import Intro_Banner from '../../../../assets/images/image.png';
export default function Center_IntroduceIndex(){
    return(
                <div id="about" className="section-about">
                  <div className="about-container">
              <div className="about-single">
                <img
                  src={Intro_Banner}
                  alt="Giới thiệu - Learn English App"
                  className="about-single-image"
                />

                <div className="about-single-content">
                  <h3>Giới thiệu về đề tài</h3>
                  <p>
                    Đề tài tập trung vào việc xây dựng một ứng dụng web hỗ trợ học tiếng Anh trực tuyến
                    với các chức năng cơ bản và thiết thực, phù hợp cho người học ở trình độ cơ bản
                    đến trung cấp. Ứng dụng cho phép người dùng đăng ký tài khoản, đăng nhập, truy cập
                    các bài học, làm bài tập, kiểm tra kết quả và theo dõi tiến độ học tập của mình.
                  </p>
                  <p> 
                    Ứng dụng được thiết kế với tiêu chí đơn giản – dễ sử dụng – học mọi lúc, mọi nơi,
                    giúp người học dễ dàng tiếp cận và duy trì thói quen học tiếng Anh hằng ngày.
                  </p>
                </div>
              </div>
                  </div>
                </div>
                );
            }