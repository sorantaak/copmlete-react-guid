import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectYear) => {
		setFilteredYear(selectYear);
	};
	return (
		<div className="">
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpenseItem
					title={props.data[0].title}
					amount={props.data[0].amount}
					date={props.data[0].date}
				/>
				<ExpenseItem
					title={props.data[1].title}
					amount={props.data[1].amount}
					date={props.data[1].date}
				/>
				<ExpenseItem
					title={props.data[2].title}
					amount={props.data[2].amount}
					date={props.data[2].date}
				/>
				<ExpenseItem
					title={props.data[3].title}
					amount={props.data[3].amount}
					date={props.data[3].date}
				/>
			</Card>
		</div>
	);
};

export default Expenses;
