import { useState } from "react";
import "./track.css";

const ExpenseTracker=()=>{
    const [expenses, setExpense]=useState([]);
    const [amount, setAmount]=useState('');
    const [category, setCategory]=useState('');
    const categories=['Food', 'Transport', 'Shopping','bills','other' ];
    // making of the form
    const addExpense=()=>{
        if(amount&&category){
        const newExpense={
            id:Date.now(),
            amount:parseFloat(amount),
            category:category
        };
        setExpense([...expenses,newExpense]);
        
    }
    setAmount('');
        setCategory('');
    };
    //deleting a expsense
    const deleteExpense=(id)=>{
       return setExpense(expenses.filter(expense=>expense.id!==id));
    };

    //total amount
    const totalAmount=()=>{
       return expenses.reduce((total,expense)=>total+expense.amount, 0);
    };
    return(
       <div className="container">
            <h1>Expense Tracker</h1>
            <div className="form-box">
                <h2>Add Expense</h2>
                <div className="input-group">
                    <label>Amount:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e)=>setAmount(e.target.value)}
                    ></input>
                </div>
                <div className="input-group">
                    <label>Categories</label>
                    <select
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}// e is the event object, e.target is the target object
                    >
                    <option value=''>Choose Category</option>
                    {categories.map(cat=>
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                    )}
                    </select>
                    
                    
                </div>
                <button onClick={addExpense} className="add-btn">Add Expense</button>
            </div>
            {/*total*/}
            <div className="total-box">
                    <h2>Total:Rs.{totalAmount()}</h2>
                    <p>Number of expenses:{expenses.length}</p>
            </div>

            {/* {expense list} */}
            <div className="expenses-list">
                  <h2>Your Expenses</h2>
        
            {expenses.length === 0 ? (
            <p>No expenses yet!</p>
            ) : (
            expenses.map(expense => (
                <div key={expense.id} className="expense-item">
                <span>{expense.category}: Rs.{expense.amount.toFixed(2)}</span>
                <button onClick={() => deleteExpense(expense.id)} className="delete-btn">
                    Delete
                </button>
                </div>
            ))
            )} 
        </div>
       </div> 
    
    
    );
};

export default ExpenseTracker;