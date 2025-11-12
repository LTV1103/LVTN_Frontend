import '../Center/center.styles.css';
import Combo_Card from '../Card/combo_card';
import Banner_Index from '../Banner/banner_Index';
export default function Center_Index() {
  return (
    <section className="center-content">
        <Banner_Index />        
        <h2>Khoa Hoc</h2>
        <Combo_Card/>
        <h2>Gioi Thieu</h2>
        <Combo_Card/>
    </section>
  );
}
