import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(params) {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal

    }  = React.useContext(TodoContext)
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onAddTodo = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    return (
        <form onSubmit={onAddTodo}>
            <label for="contenido">Contenido del Todo</label>
            <textarea
                id="contenido"
                value={newTodoValue}
                onChange={onChange}
                placeholder="Ingresa tu Todo"
            />

            <div className="TodoForm-buttonContainer">
                <button
                    className="btn btn-warning"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    className="btn btn-success"
                    type="submit"
                >
                    Anadir
                </button>
            </div>

        </form>
    );
}

export {TodoForm};