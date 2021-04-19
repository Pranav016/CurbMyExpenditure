import React from 'react';
import Expenses from './components/Expenses/Expenses';
import expenses from './data/dummy_data.js';

const App = () => {
	return (
		<div>
			<h1>Curb-My-Pocket</h1>
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
