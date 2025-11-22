import { useState } from "react";
import LoginGG from "../../../components/Logic/LoginGG";

export default function MOD_DangNhap({ isOpen, onClose, onSubmit, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(
    username, // phải là key 'username'
    password
    );console.log(onSubmit);
  };

  return (
    <>
     <div className="modal-backdrop fade show"></div>
      <div className={`modal fade ${isOpen ? "show d-block" : ""}`} tabIndex="-1" onClick={onClose}>
        <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content shadow-lg rounded-3">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold text-success">🔑 Đăng Nhập</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              {error && <div className="alert alert-danger mb-3">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <div className="input-group">
                    <span className="input-group-text">👤</span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Nhập username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="input-group">
                    <span className="input-group-text">🔒</span>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Nhập password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-success w-100 mb-3">
                   Đăng Nhập
                </button>
                <div className="divider"><span>Hoặc</span></div>
                  <LoginGG
                  onLoginSuccess={(user) => {
                    const email = user.email.trim();
                    const password = "GOOGLE_USER";
                    onSubmit(email,password);
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
