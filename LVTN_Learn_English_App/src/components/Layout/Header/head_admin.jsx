export default function Header_Admin() {
  return (
    <div className="header bg-light p-3 shadow-sm">
      <div className="row align-items-center">
        
        {/* Cột trái: Tiêu đề */}
        <div className="col-4 d-flex align-items-center">
          <h4 className="m-0" ><b>DASHBOARD</b></h4>
        </div>

        {/* Cột giữa: ô tìm kiếm */}
        <div className="col-4 d-flex justify-content-center">
          
        </div>

        {/* Cột phải: icon + dropdown */}
        <div className="col-4 d-flex justify-content-end align-items-center gap-2">
            <input
            type="search"
            className="form-control"
            placeholder="Search..."/>
        </div>
      </div>
    </div>
  );
}
