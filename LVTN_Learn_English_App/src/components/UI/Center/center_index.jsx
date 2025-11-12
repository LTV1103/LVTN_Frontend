import '../Center/center.styles.css';
import Combo_Card from '../Card/combo_card';
export default function Center_Index() {
  return (
    <section className="center-content">
      <h1 className="text-danger">Center</h1>
        <h2>Khoa Hoc</h2>
        <Combo_Card/>
        <Combo_Card/>
        <Combo_Card/>
        <h2>Gioi Thieu</h2>
        <Combo_Card/>



    </section>
  );
}
