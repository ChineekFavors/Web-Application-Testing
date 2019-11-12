import React from "react";



import './display.css';

function Display(props) {
	
	
	return (
		<div className="DisplayContainer">
			<div className="strikesDiv">
				<h2>Strikes</h2>
				<h2>{props.strikes}</h2>
			</div>
			<div className="ballsDiv">
				<h2>Balls</h2>
				<h2>{props.balls}</h2>
			</div>
			<div className="foulsDiv">
				<h2>Fouls</h2>
				<h2>{props.fouls}</h2>
			</div>
		</div>
	);
};
export default Display;