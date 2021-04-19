// This component acts as a wrapper component over the expenses and the expense items and avoids some duplication of css code
import React from 'react';
import './Card.css';

function Card(props) {
	const classes = ' card ' + props.className;
	return <div className={classes}>{props.children}</div>; // props.children helps to make this a wrapper component
	// props.children is implicitly sent to every component
}

export default Card;
