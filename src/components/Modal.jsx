import { useState } from 'react';

export default function Modal({ children, onClose }) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    // wait for animation to finish before calling parent's onClose
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`modal-overlay ${closing ? 'fade-out' : 'fade-in'}`}
      onClick={handleClose}
    >
      <div
        className={`modal-content ${closing ? 'scale-out' : 'scale-in'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleClose}>&times;</button>
        {children}
      </div>
    </div>
  );
}
