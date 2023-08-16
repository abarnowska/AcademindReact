/*










*/

import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);

	const handleClick = () => {
		setTitle("Updated!");
	};

	return (
		<Card className='expense-item'>
			<div>
				<ExpenseDate date={props.date}></ExpenseDate>
			</div>
			<div className='expense-item__description'>
				<h2>{title}</h2>
			</div>
			<div className='expense-item__price'>${props.amount}</div>
			<button  onClick={handleClick}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;
