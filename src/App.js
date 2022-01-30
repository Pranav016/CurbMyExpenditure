import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import expensesData from './data/dummy_data.js';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
	const [newExpenseData, setNewExpenseData] = useState(expensesData);
	const addExpenseHandler = (newExpense) => {
		setNewExpenseData((prevExpenses) => [newExpense, ...prevExpenses]);
	};
	return (
		<div>
			<h1 className='main-head'>Curb My Expenditure</h1>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={newExpenseData} /> {/* two way binding */}
		</div>
	);
};

export default App;
