import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const [isShowForm, setIsShowForm] = useState(false);
	const saveExpenseDataHandler = (newExpenseData) => {
		const expesesData = {
			...newExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpenseData(expesesData);
		setIsShowForm(false);
	};
	const startShowForm = () => {
		setIsShowForm(true);
	};
	const stopShowForm = () => {
		setIsShowForm(false);
	};
	return (
		<div className="new-expense">
			{!isShowForm ? (
				<button onClick={startShowForm}>Add New Expense</button>
			) : (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={stopShowForm}
				/>
			)}
		</div>
	);
};

export default NewExpense;
