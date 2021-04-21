import React from 'react';
import ExpenseItem from '../Expenses/ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
	if (props.items.length === 0) {
		return <h2 className='expenses-list__fallback'>No expenses found!</h2>;
	}
	return (
		<ul className='expenses-list'>
			{props.items.map((expense) => (
				<ExpenseItem
					key={expense.id}
					/* we added a key here because React was re-rendering all the
				ExpenseItems when a new one was added and if there was state
				in any of them then it would've lost it.
				Key helps identify the previously added components and renders
				only those that were recently added */
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	);
};

export default ExpenseList;
