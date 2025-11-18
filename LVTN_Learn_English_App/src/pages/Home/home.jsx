import '../Home/home.styles.css';
import Header_Index from '../../components/UI/Header/head_index.jsx';
import Footer_Index from '../../components/UI/Footer/foot_index.jsx';
import Center_Index from '../../components/UI/Center/index/center_index.jsx';

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
