import './button.styles.css'

export default function BTN_ThanhToan({ onClick }) {
  return (
    <button 
      type="button" 
      className="btn btn-danger" 
      onClick={onClick}
    >
      ThanhToan
    </button>
  );
}
