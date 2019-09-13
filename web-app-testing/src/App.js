import React, {useState} from 'react';

import './App.css';

import Display from "./components/display/Display.js";
import DashBoard from "./components/dashBoard/DashBoard.js";

function App() {
  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)
  const [fouls, setFouls] = useState(0)

  function addStrike(){
  	if (strikes >= 2){
  		setStrikes(0);
  		setBalls(0);
  		setFouls(0);
  	} else{
  		setStrikes(strikes + 1);
  	}
  	
  }

  function addBall(){
  	if (balls >= 3){
  		setStrikes(0);
  		setBalls(0);
  		setFouls(0);
  	} else{
  		setBalls(balls + 1);
  	}
  	
  }

  function addFoul(){
  	if (fouls == 2){
  		return;
  	}else{
  		setFouls(fouls + 1);
  		setStrikes(strikes + 1);
  	}
  	
  }

  function addHit(){
  	setStrikes(0);
  	setBalls(0);
  	setFouls(0);

  }



  return (
    <div className="App">
	    <h1>BaseBall </h1>
	    <Display balls={balls} strikes={strikes} fouls={fouls} />
	    <DashBoard addStrike={addStrike} 
	    	addball={addBall}
	    	addFoul={addFoul}
	    	addHit={addHit}
	    />
      
    </div>
  );
}

export default App;
