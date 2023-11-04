import React from 'react';

export default function Form() {
    return (
        <div className='form max-w-sm mx-auto w-96'>
            <h1 className="font-bold pb-6 text-xl">Transaction</h1>  

            <form id="form">
                <div className="grid gap-4">
                    <div className="input-gp">
                        <input type="text" placeholder="Description" className='form-input'/>
                    </div>    

                    <select className="form-input">
                        <option value="Food" defaultValue>Food</option>
                        <option value="Transportation" defaultValue>Transportation</option>
                        <option value="Entertainment" defaultValue>Entertainment</option>
                    </select>

                    <div className="input-gp">
                        <input type="text" placeholder="Amount" className='form-input'/>
                    </div> 

                    <div className="submit-btn">
                        <button className='border py-2 text-white bg-slate-700 w-full'>Add Transaction</button>
                    </div>
                </div>    
            </form>  
        </div>
    )
}