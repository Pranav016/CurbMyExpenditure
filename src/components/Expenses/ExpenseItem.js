import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

/* This is a statless or a dumb or a presentational
component since there is no change of state here */

const ExpenseItem = (props) => {
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<Card className='expense-item__price'>${props.amount}</Card>
			</div>
		</Card>
	);
};

export default ExpenseItem;
