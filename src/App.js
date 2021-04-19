import React from 'react';
import Expenses from './components/Expenses/Expenses';
import expenses from './data/dummy_data.js';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
	return (
		<div>
			<h1>Curb-My-Pocket</h1>
			<NewExpense />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
