import "./modal.styles.css"

export default function MOD_DangNhap({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Đăng Nhập</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Nhập username" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Nhập password" />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-2">Đăng Nhập</button>
              <button type="button" className="btn btn-danger w-100">Đăng Nhập với Google</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}