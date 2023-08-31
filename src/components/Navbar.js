import React, { useState } from 'react';
import './Navbar.css';
import Draggable from 'react-draggable';

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSaveClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <button className="save-button" onClick={handleSaveClick}>
          Save
        </button>
        {isPopupOpen && (
          <Draggable>
            <div className="popup">
              <button className="close-button" onClick={closePopup}>
                <span className="close-icon">✖</span>
              </button>
            </div>
          </Draggable>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
