import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

const Expenses = (props) => {
	const [filteredYear, setFileredYear] = useState('2021');

	const filterChangeHandler = (selectedYear) => {
		setFileredYear(selectedYear);
	};

	return (
		<div>
			<Card className='expenses'>
				{/* here ExpenseFilter is called a 'controlled component' since its logic is implemented in the Expenses.js and data is send back and forth from it */}
				<ExpenseFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
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
			</Card>
		</div>
	);
};

export default Expenses;
