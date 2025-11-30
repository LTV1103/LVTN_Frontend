import '../page.styles.css'
import Header_Index from '../../components/Layout/Header/head_index.jsx';
import Footer_Index from '../../components/Layout/Footer/foot_index.jsx';
import Center_Index from '../../components/Layout/Center/Home/center_index.jsx';

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <Header_Index />
      <div className="main-content">
        <Center_Index />
      </div>
      <Footer_Index />
    </div>
  );
}
