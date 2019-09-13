import React from "react";



import './display.css';

function Display(props) {
	console.log(props);
	return (
		<div className="DisplayContainer">
			<div className="ballsDiv">
				<h2>Balls</h2>
				<h2>{props.balls}</h2>
			</div>
			<div className="strikesDiv">
				<h2>Strikes</h2>
				<h2>{props.strikes}</h2>
			</div>
		</div>
	);
};
export default Display;