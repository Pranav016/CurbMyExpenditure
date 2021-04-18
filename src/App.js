import Expenses from './components/Expenses';
import expenses from './data/dummy_data.js';

function App() {
	return (
		<div>
			<h1>Curb-My-Pocket</h1>
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
