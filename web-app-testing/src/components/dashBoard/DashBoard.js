import React from "react";

import './dashboard.css';


function DashBoard(props){


	return (
		<div className="DashBoardContainer">
			<button onClick={props.addStrike} className="strike" type="button">Strike</button>
			<button onClick={props.addball} className="ball" type="button">Ball</button>
			<button onClick={props.addFoul} className="foul" type="button">Foul</button>
			<button onClick={props.addHit} className="hit" type="button">Hit</button>
		</div>

	);
}

export default DashBoard;