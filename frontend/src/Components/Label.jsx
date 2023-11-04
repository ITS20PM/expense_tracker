import React from 'react';

const category = [
    {
        type: "Food",
        color: "rgb(255, 99, 132)",
        percent: 40
    },
    {
        type: "Transportation",
        color: "rgb(54, 162, 235)",
        percent: 30
    },
    {
        type: "Entertainment",
        color: "rgb(255, 205, 86)",
        percent: 30
    }
];

export default function Label() {
    return (
        <>
            {category.map((v, k)=> <LabelComponent key={k} data={v}></LabelComponent>)}
        </>
    )
}

function LabelComponent({data}) {
    if (!data)
        return <></>

    return (
        <div className='labels flex justify-between'>
            <div className="flex gap-2">
                <div className='w-2 h-2 rounded py-3' style={{background: data.color ?? "#f9c74f"}}></div>
                <h3 className='text-md'>{data.type ?? ''}</h3>
            </div>
            <h3 className='font-bold'>{data.percent ?? 0}%</h3>
        </div>
    )
}