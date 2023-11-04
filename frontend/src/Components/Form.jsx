import React from 'react';
import {useForm} from 'react-hook-form';
import Transaction from './Transaction';

export default function Form() {

    const {register, handleSubmit, resetField} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='form max-w-sm mx-auto w-96'>

            <h1 className="font-bold pb-6 text-xl">Transaction</h1>  

            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4">
                    <div className="input-gp">
                        <input type="text" {...register('name')} placeholder="Description" className='form-input'/>
                    </div>    

                    <select className="form-input" {...register('type')}>
                        <option value="Food" defaultValue>Food</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Entertainment">Entertainment</option>
                    </select>

                    <div className="input-gp">
                        <input type="text" {...register('amount')} placeholder="Amount" className='form-input'/>
                    </div> 

                    <div className="submit-btn">
                        <button className='border py-2 text-white bg-slate-700 w-full'>Add Transaction</button>
                    </div>
                </div>    
            </form>  

            <Transaction></Transaction>
        </div>
    )
}