import React from 'react'
import ExpenseItems from './ExpenseItems';

function ExpenseList() {

    const expense_category = [
        {name: "House", cost: 2500},
        {name: "Food", cost: 600},
        {name: "Transportation", cost: 300},
        {name: "Utilities", cost: 150},
        {name: "Health", cost: 150},
        {name: "Entertainment", cost: 100},
        {name: "Others", cost: 200}
    ];

    return (
        <ul className='list-group'>
            {expense_category.map((expense) => (
                <ExpenseItems name = {expense.name} cost = {expense.cost}></ExpenseItems>
            ))}
        </ul>
    )
}

export default ExpenseList