import './home.styles.css'
import Xuly_DangNhap from '../../components/Logic/btn_Login.jsx'
import Xuly_DangKy from '../../components/Logic/btn_Res.jsx'
export default function HomePage(){
    return(
    <div className="wellcome">
        <h1>Hello</h1>
        <Xuly_DangNhap />
        <Xuly_DangKy />
        <p>Test</p>
    </div>
    );
}
