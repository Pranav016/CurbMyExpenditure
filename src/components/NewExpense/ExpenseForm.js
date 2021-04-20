import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
	/* useState hook will help save the value in variable
	even when the component is re-rendered */
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	/* Alternate Method-
	const [userInput, setUserInput] = useState({
		setEnteredTitle: '',
		setEnteredAmount: '',
		setEnteredDate: '',
	});
	*/

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		/* setUserInput((prevState) => {
			return {
				...prevState, // do not use userInput here because that is scheduled by react and may not be the up to date when this callback is called
				enteredTitle: event.target.value,
			 };
		}); */
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		/* setUserInput((prevState) => {
			return {
				...prevState,
				enteredAmount: event.target.value,
			};
		}); */
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		/* setUserInput((prevState) => {
			return {
				...prevState,
				enteredDate: event.target.value,
			};
		}); */
	};

	return (
		<form>
			<div className='new-expense-controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' onChange={titleChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						onChange={dateChangeHandler}
					/>
				</div>
				<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;