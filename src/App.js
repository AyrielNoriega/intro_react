import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

const   todos = [
    { id: 1, text: 'Cortar cebolla', completed: false},
    { id: 2, text: 'Tomar curso', completed: false},
    { id: 3, text: 'Llar con la llorona', completed: false}
];

function App() {
  return (
    <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
            {todos.map(todo => (
                <TodoItem 
                  key={todo.id} 
                  text={todo.text} 
                  completed={todo.completed}
                />
            ))}
        </TodoList>

        <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
