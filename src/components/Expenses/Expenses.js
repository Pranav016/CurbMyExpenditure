import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseList from '../ExpenseList/ExpenseList';

const Expenses = (props) => {
	const [filteredYear, setFileredYear] = useState('2021');

	const filterChangeHandler = (selectedYear) => {
		setFileredYear(selectedYear);
	};
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className='expenses'>
				{/* here ExpenseFilter is called a 'controlled component' since its logic is implemented in the Expenses.js and data is send back and forth from it */}
				<ExpenseFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpenseList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
