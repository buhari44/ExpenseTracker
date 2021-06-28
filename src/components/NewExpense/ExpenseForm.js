import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    //updating title state and function
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    
    const titleChangeHandler = event => {
        setEnteredTitle(event.target.value)
        
    }
//updating amount state and function
    
    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value)
    }
    //updating date state and function
    
    const dateChangeHandler = event => {
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const newExpense = {
            title: enteredTitle,
            amount: enteredAmount,
            date:new Date(enteredDate)
        }
        
        props.onSaveExpenseData(newExpense)

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        console.log(enteredTitle)
        
        // calling the newexpense function that holds the expense data object
        
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} required/>
            </div>
            <div className="new-expense__control">
                  <label>Amount</label>
                    <input type="number"value={enteredAmount}  max="80.20" min="0" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                  <label>Date</label>
                    <input type="date" value={enteredDate}  min="2012-01-01" max="2023-12-13" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div class="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm