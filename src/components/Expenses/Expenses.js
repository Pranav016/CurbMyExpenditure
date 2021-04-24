import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpenseChart from '../ExpenseChart/ExpenseChart';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2021');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpenseChart expenses={filteredExpenses} />
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
