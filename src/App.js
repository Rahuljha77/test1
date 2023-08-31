import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LeftBar from './components/LeftBar';
import Center from './components/Center';
import RightBar from './components/RightBar';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <LeftBar />
        <Center />
        <RightBar />
      </div>
    </div>
  );
}

export default App;

