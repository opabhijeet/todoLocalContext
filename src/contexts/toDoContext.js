import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});
export const useToDo = () => useContext(ToDoContext);
export const ToDoProvider = ToDoContext.Provider;