import { useState } from "react";
import "./modal.styles.css";

export default function MOD_DangKy({ isOpen, onClose, onSubmit, error }) {
  const [form, setForm] = useState({
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password || !form.confirmPassword || !form.fullname) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    // if (form.password.length < 8) {
    //   alert("Password phải ít nhất 8 ký tự!");
    //   return;
    // }
    if (form.password !== form.confirmPassword) {
      alert("Password và Confirm Password không khớp!");
      return;
    }

    onSubmit(form);
  };

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className={`modal fade ${isOpen ? "show d-block" : ""}`} tabIndex="-1" onClick={onClose}>
        <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content shadow-lg rounded-3">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold text-success">📝 Đăng Ký</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              {error && <div className="alert alert-danger mb-3">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">Họ và tên</label>
                  <input type="text" className="form-control" id="fullname" name="fullname" value={form.fullname} onChange={handleChange} placeholder="Nhập họ và tên" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" name="username" value={form.email} onChange={handleChange} placeholder="Nhập email đăng ký" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" name="password" value={form.password} onChange={handleChange} placeholder="Nhập password" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Nhập lại password" required />
                </div>

                {/* Nút đăng ký thường */}
                <button type="submit" className="btn btn-success w-100 mb-3">
                  Đăng Ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
