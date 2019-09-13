import React from "react";

import './dashboard.css';


function DashBoard(){


	return (
		<div className="DashBoardContainer">
			<button className="strike" type="button">Strike</button>
			<button className="ball" type="button">Ball</button>
			<button className="foul" type="button">Foul</button>
			<button className="hit" type="button">Hit</button>
		</div>

	);
}

export default DashBoard;