import '../Home/home.styles.css';
import Header_User from '../../components/UX/Header/head_User.jsx';
import Footer_Index from '../../components/UX/Footer/foot_index.jsx';
import Center_Index from '../../components/UX/Center/index/center_index.jsx';

export default function HomePage() {
  return (
    <div className="home-wrapper">
      <Header_User />
      <div className="main-content">
        <Center_Index />
      </div>
      <Footer_Index />
    </div>
  );
}
