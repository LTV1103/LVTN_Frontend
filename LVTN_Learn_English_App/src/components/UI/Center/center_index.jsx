import '../Center/center.styles.css';
import Combo_Card from '../Card/combo_card';
import Banner_Index from '../Banner/banner_Index';
import Introduce from '../Center/introduce_index';
import News_Index from './news_index';  
export default function Center_Index() {
  return (
    <section className="center-content">
        <Banner_Index /> 
        <h2 id="about">Gioi thieu</h2>
        <Introduce/>       
        <h2 id="programs">Chuong trinh</h2>
        <Combo_Card/>
        <h2 id="courses">Khoa hoc</h2>
        <Combo_Card/>
        <h2 id="news">Tin Tức & Sự Kiện</h2>
        <News_Index />
    </section>
  );
}
