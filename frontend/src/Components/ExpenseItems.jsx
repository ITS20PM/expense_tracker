import React from 'react';
import {TiDelete} from 'react-icons/ti';

const ExpenseItems = (props) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {props.name}
        <div>
            ${props.cost}
            <TiDelete size='1.8em'></TiDelete>
        </div>
    </li>
  )
}

export default ExpenseItems;