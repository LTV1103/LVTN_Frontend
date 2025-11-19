import { useState } from "react";
import "./modal.styles.css";

export default function MOD_DangKy({ isOpen, onClose, onSubmit, error }) {
  const [form, setForm] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.username || !form.email || !form.password || !form.confirmPassword || !form.fullname) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    if (form.password.length < 8) {
      alert("Password must be at least 8 characters!");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Password và Confirm Password không khớp!");
      return;
    }

    onSubmit(form);
  };

  return (
    <div className="modal show d-block" tabIndex="-1" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Đăng Ký</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Họ và tên</label>
                <input type="text" className="form-control" id="fullname" name="fullname" value={form.fullname} onChange={handleChange} placeholder="Nhập họ và tên" />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" name="username" value={form.username} onChange={handleChange} placeholder="Nhập username" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} placeholder="Nhập email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={form.password} onChange={handleChange} placeholder="Nhập password" />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Nhập lại password" />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-2">Đăng Ký</button>
              <button type="button" className="btn btn-danger w-100" onClick={() => alert("Đăng ký Google demo")}>Đăng Ký với Google</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
