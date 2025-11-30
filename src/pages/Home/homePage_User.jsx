import '../stylesPage/page.styles.css'
import Header_User from '../../components/Layout/Header/head_user.jsx';
import Footer_Index from '../../components/Layout/Footer/foot_index.jsx';
import Center_Index from '../../components/Layout/Center/index/center_index.jsx';

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
