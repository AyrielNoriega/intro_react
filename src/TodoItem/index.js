import React from 'react';
import { TodoIcon } from '../TodoIcon';
import './TodoItem.css';

function TodoItem(props) {
    const onComplete = () => {
        alert('todo completo ' + props.text)
    }

    const onDelete = () => {
        alert('todo borrado ' + props.text)
    }


    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
            <TodoIcon
                type="check"
            />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p >
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
            <TodoIcon
                type="delete"
            />
            </span>
        </li>
    );
}

export { TodoItem };