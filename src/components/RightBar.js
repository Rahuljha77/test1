import React, { useState } from 'react';
import './RightBar.css';

const RightBar = () => {
  const [width, setWidth] = useState(200); 

  const handleMouseDown = (e) => {
    const initialX = e.clientX;
    const minWidth = 100; 

    const handleMouseMove = (event) => {
      const newWidth = Math.max(minWidth, width - (event.clientX - initialX));
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
    <div className="right-bar" style={{ width }}>
      <div className="resize-handle" onMouseDown={handleMouseDown}></div>
      {/* Content of the RightBar */}
    </div>
  );
}

export default RightBar;
