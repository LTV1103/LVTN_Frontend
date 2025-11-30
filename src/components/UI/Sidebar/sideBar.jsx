import { useState, useEffect } from "react";
import personUser from "../../../assets/icons/person-circle.svg"
import { House, User, Settings, LogOut, BookOpen, GraduationCap, CreditCard } from "lucide-react";
import { logoutUser } from "../../event/DangXuat.js";
import userApi from "../../../services/userApi.js";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ open = true }) {
  const [datauser, setDatauser] = useState(null);
  const id = localStorage.getItem("id");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await userApi.fetchUsersbyID(id);
        setDatauser(res);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  const handleClick = async () => {
    const success = await logoutUser();
    if (success) navigate("/"); // dùng navigate chuẩn React Router
  };
  const navigationTo = (path) => {navigate(path);}

 



  return (
    <div
      className="d-flex flex-column bg-dark text-white p-3"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {/* Toggle Btn */}
      <div className="mb-4 d-flex flex-column">
        <div className="justify-content-center">
        <img src={personUser} alt="User" width={40} height={40} className="rounded-circle mb-2" style={{ backgroundColor: "#fff", padding: "4px" }} />
        </div>
        {datauser && <h4 className="m-0">Welcome: {datauser.fullname}</h4>}
      </div>
      <hr />
      {/* Nav Items */}
      <div className="flex-grow-1 d-flex flex-column gap-2">
        <SidebarItem open={open} icon={<House size={20} />} label="Dashboard" onClick={()=>navigationTo("/admin")}/>
        <SidebarItem open={open} icon={<User size={20} />} label="Quản lý người dùng" onClick={()=>navigationTo("/admin/user")} />
        <SidebarItem open={open} icon={<GraduationCap size={20} />} label="Quản lý khóa học" onClick={()=>navigationTo("/admin/course")} />
        <SidebarItem open={open} icon={<BookOpen size={20} />} label="Quản lý bài học" onClick={()=>navigationTo("/admin/lesson")} />
        <SidebarItem open={open} icon={<CreditCard size={20} />} label="Quản lý thanh toán" onClick={()=>navigationTo("/admin/payment")}/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <SidebarItem open={open} icon={<LogOut size={20} />} label="Đăng xuất" onClick={handleClick} />
      </div>
    </div>
  );
}

// Component con cho từng item
function SidebarItem({ icon, label, open, onClick }) {
  return (
    <div
      className="d-flex align-items-center p-2 rounded"
      style={{ cursor: "pointer", transition: "background 0.2s ease" }}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <span className="me-2">{icon}</span>
      {open && <span>{label}</span>}
    </div>
  );
}
