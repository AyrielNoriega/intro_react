import React from "react";
import TodoAqui from './TodoCounter';

const   todos = [
    { text: 'Cortar cebolla', completed: false},
    { text: 'Tomar curso', completed: false},
    { text: 'Llar con la llorona', completed: false}
];

function App() {
  return (
    <React.Fragment>
        <TodoAqui />
        {/* <TodoSearch /> */}
            <input placeholder="Cebolla" />
        {/* <TodoList> 
            {todos.map(todo => (
                <TodoItem />
            ))}
        </TodoList> */}

        {/* <CreateTodoButton /> */}
        <button>+</button>
    </React.Fragment>
  );
}

export default App;
