import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectYear) => {
		setFilteredYear(selectYear);
	};
	const filteredExpense = props.items.filter((item) => {
		return item.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div className="">
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpense} />
				<ExpensesList items={filteredExpense} />
			</Card>
		</div>
	);
};

export default Expenses;
