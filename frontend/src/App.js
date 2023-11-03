import React from "react";
import './App.css';
import Data from "./Components/Data";

const App = () => {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-zinc-200">Expense Tracker</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Data></Data>
        </div>
      
      </div>
    </div>
  )
};

export default App;
