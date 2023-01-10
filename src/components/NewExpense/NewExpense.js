import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const saveExpenseDataHandler = (newExpenseData) => {
		const expesesData = {
			...newExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpenseData(expesesData);
	};
	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
