import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {TodoContext} from '../TodoContext'
import {Modal} from '../Modal';

function AppUI() {
    const { 
            error,
            loading,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        } = React.useContext(TodoContext);
    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            {searchedTodos.map(todo => (
                <TodoItem
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
            ))}
        </TodoList>

        {openModal && ( //si open modal es true renderica este segunto paràmetro
            <Modal>
                <p>{searchedTodos[0]?.text}</p>
            </Modal>
        )}
        <CreateTodoButton 
            setOpenModal={setOpenModal}
        />
        </React.Fragment>
    );
}


export { AppUI };