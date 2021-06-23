import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
    const [year, setYear] = useState("");

    const saveClickedYear = (clickedYear) => {
        setYear(clickedYear);
    };

    return (
        <Card className="expenses">

            <ExpensesFilter onClickedYear={saveClickedYear} />

            {props.items.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>

    )
}

export default Expenses;