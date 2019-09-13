import React, {useState} from 'react';

import './App.css';

import Display from "./components/display/Display.js";
import DashBoard from "./components/dashBoard/DashBoard.js";

function App() {
  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)

  return (
    <div className="App">
    <h1>BaseBall </h1>
    <Display balls={balls} strikes={strikes} />
    <DashBoard />
      
    </div>
  );
}

export default App;
