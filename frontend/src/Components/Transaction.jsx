import React from 'react';
import 'boxicons';

const category_list = [
    {
        name: "Food",
        color: "rgb(255, 99, 132)",
    },
    {
        name: "Transportation",
        color: "rgb(54, 162, 235)",
    },
    {
        name: "Entertainment",
        color: "rgb(255, 205, 86)",
    }
];

export default function Transaction() {
    return (
        <div className='flex flex-col py-6 gap-4'>
            <h1 className="font-bold pb-6 text-md">Transaction History</h1>
            
            {category_list.map((val, k) => <Transaction_List key={k} category={val}></Transaction_List>)}
            
        </div>
    )
}

function Transaction_List({category}) {
    if (!category)
        return null;

    return (
        <div className='item flex justify-center bg-zinc-200 py-2 rounded-r'
        style={{borderRight: `10px solid ${category.color ?? "#e5e5e5"}`}}>
            
            <button className='px-3'>
                <box-icon size="20px" name="trash"></box-icon>
            </button>
            <span className='block w-full'>{category.name}</span>
        </div>
    );
}