import React, { useRef } from 'react';
import './Popup.css';

const Popup = ({ closePopup }) => {
  const popupRef = useRef(null);
  const offset = 20; 

  const handleMouseDown = (e) => {
    const popup = popupRef.current;
    const startX = e.pageX - popup.offsetLeft;
    const startY = e.pageY - popup.offsetTop;

    const handleMouseMove = (e) => {
      popup.style.left = `${e.pageX - startX - offset}px`;
      popup.style.top = `${e.pageY - startY - offset}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', handleMouseMove);
    });
  };

  return (
    <div className="popup" ref={popupRef} onMouseDown={handleMouseDown}>
      <div className="popup-header">
        <span className="popup-title">Draggable Popup</span>
        <button className="close-button" onClick={closePopup}>
          Close
        </button>
      </div>
      <div className="popup-content">
        {/* Popup content */}
      </div>
    </div>
  );
};

export default Popup;
