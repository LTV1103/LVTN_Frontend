import { useState } from 'react'; 
import Login from '../Modal/LoginForm/login'; 
import '../Button/button.css'

export default function ButtonLogin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="buttonLogin" onClick={() => setIsOpen(true)}>
        Login
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsOpen(false)}>
              &times;
            </button>
            <Login />
          </div>
        </div>
      )}
    </>
  );
}
