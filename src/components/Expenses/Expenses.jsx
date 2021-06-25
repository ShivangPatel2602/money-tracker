import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2020");

    const saveClickedYear = (selectedYear) => {
        setFilteredYear(selectedYear);
    } 

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">

            <ExpensesFilter selected={filteredYear} onClickedYear={saveClickedYear} />

            {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card> 

    )
}

export default Expenses;