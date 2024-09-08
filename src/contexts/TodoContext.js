import { createContext, useContext } from "react";

// Creating a context with default values for todos and functions
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      task: "input",
      completed: false, // Default task is incomplete
    }
  ],
  addTodo: (task) => { }, //actual implementations is written in App.jsx
  editTodo: (id, task) => { },
  deleteTodo: (id) => { },
  toggleCheck: (id) => { }
});

// Custom hook to use the todo context
export const useTodo = () => {
  return useContext(TodoContext); // Provides access to context values
}

export const TodoProvider = TodoContext.Provider; // Export the provider for use in the App component
