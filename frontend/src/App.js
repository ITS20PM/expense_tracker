import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Budget from "./Components/Budget";
import Remain from "./Components/Remain";
import ExpenseTot from "./Components/ExpenseTot";
import ExpenseList from "./Components/ExpenseList";
import AddExpenseForm from "./Components/AddExpenseForm";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>

        <div className="col-sm">
          <Remain />
        </div>

        <div className="col-sm">
          <ExpenseTot />
        </div>
      </div>

      <h3 className="mt-5">Expenses</h3>

      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>

      <h3 className="mt-5">Add Expense</h3>
      <div className="mt-5">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </div>
  )
};

export default App;
