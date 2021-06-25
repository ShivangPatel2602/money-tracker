import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isClicked, setButtonClick] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setButtonClick(false);
    };

    const handleButtonClick1 = () => {
        setButtonClick(true);
    }

    const handleButtonClick2 = () => {
        setButtonClick(false);
    }

    return (
        <div className="new-expense">
            {!isClicked && <button onClick={handleButtonClick1}>Add New Expense</button>};
            {isClicked && <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            cancelClick={handleButtonClick2} />}
        </div>
    )
};

export default NewExpense;