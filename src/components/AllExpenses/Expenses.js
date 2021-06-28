import React ,{useState} from 'react'
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';


const Expenses = (props) => {
    const [currentYear, setYear] = useState("2020")
    const yearFromExpenseFilter = (yearReference) => {
        setYear(yearReference)
        }
   
    const filteredExpenses = props.item.filter(expense => {
       return expense.date.getFullYear().toString()  ===  currentYear
    })
    let filterItem =  <p>No item found</p>
    if (filterItem > 0) {
         filteredExpenses.map(ele =>
            <ExpenseItem key={ele.id} date={ele.date} title={ele.title} amount={ele.amount} />)
    }

    return (
        <div>
        <Card className="expenses">
                <ExpenseFilter getYear={yearFromExpenseFilter} select={currentYear} />
                {filteredExpenses.length > 0 && filteredExpenses.map(ele =>
                    <ExpenseItem key={ele.id} date={ele.date} title={ele.title} amount={ele.amount} />)
                }
            </Card>
            </div>
    )
}
export default Expenses;
            

                