import React from 'react';

import './App.css';

import Display from "./components/display/Display.js";
import DashBoard from "./components/dashBoard/DashBoard.js";

function App() {
  return (
    <div className="App">
    <h1>BaseBall </h1>
    <Display />
    <DashBoard />
      
    </div>
  );
}

export default App;
