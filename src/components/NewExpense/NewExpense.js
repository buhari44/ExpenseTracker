import React from 'react'
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"
const NewExpense = (props) => {
    // function pointing to the expenseform (child component)
    const saveItemHandler = (allExpense) => {
        const expense = {
            ...allExpense,
            id:Math.random().toString()
        }
        // console.log(expense)
        props.holdExpense(expense)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveItemHandler}/>
        </div>
    )
}
export default NewExpense