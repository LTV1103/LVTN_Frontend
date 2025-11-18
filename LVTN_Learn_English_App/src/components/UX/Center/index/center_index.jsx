import './center.styles.css';
import Combo_Card from '../../../UI/Card/combo_card';
import Banner_Index from '../../../UI/Banner/banner_index';
import Introduce from './introduce_index';
import News_Index from './news_index';  
export default function Center_Index() {
  return (
    <section className="center-content">
        <Banner_Index /> 
        <h2 id="about">Giới Thiệu</h2>
        <Introduce/>       
        <h2 id="programs">Chương Trình</h2>
        <Combo_Card/>
        <h2 id="courses">Khóa Học</h2>
        <Combo_Card/>
        <h2 id="news">Tin Tức & Sự Kiện</h2>
        <News_Index />
    </section>
  );
}
