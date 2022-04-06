import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './TodoIcon.css';

function TodoIcon(props) {
    const iconTypes ={
        "check": faCircleCheck,
        "delete": faTrashCan
    };
    return (
            <span
                className={`Icon-conteiner Icon-Container--`}
                onClick={onclick}
            >
            <FontAwesomeIcon icon={iconTypes[props.type]} />
            </span>
    );
}

export {TodoIcon};