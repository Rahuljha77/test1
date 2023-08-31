import React, { useState } from 'react';
import './LeftBar.css';

const LeftBar = () => {
  const [width, setWidth] = useState(200); 

  const handleMouseDown = (e) => {
    const initialX = e.clientX;
    const minWidth = 100; 

    const handleMouseMove = (event) => {
      const newWidth = Math.max(minWidth, width + (event.clientX - initialX));
      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="left-bar" style={{ width }}>
      <div className="resize-handle" onMouseDown={handleMouseDown}></div>
      <div className="grid">
        <div className="row">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="row">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
        <div className="row">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
