
import React, { useEffect, useState } from 'react'
import { TodoProvider } from './contexts' // Import the context provider
import InputTodo from './components/InputTodo'; // Import the InputTodo component
import Task from './components/Task'; // Import the Task component


function App() {
  const [todos, setTodos] = useState([]); // State to manage the list of todos

  // Function to add a new todo
  // Add the new todo to the state,here the previous values access is taken and the new todos are added without the loss of previous todos
  // ...todo and ...prev is the spread operator of javascript that is used to maintain immutability it creates the copy of the object and spreads it
  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo }, ...prev]);

  }

  // Function to edit an existing todo
  const editTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))); // Update the specific todo by ID
    //.map is used to create a new array 
  }

  // Function to delete a todo by its ID
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => (prevTodo.id !== id))); // Remove the todo from the state
  }

  // Function to toggle the completed state of a todo
  const toggleCheck = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo));
  }

  useEffect(() => {
    // Retrieve todos from localStorage and safely parse them
    try {
      const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      setTodos(savedTodos);
      //JSON->JavaScript Object Notation
      //JSON.parse converts a JSON string into a JavaScript object.
      //getItem to retrieve data
    } catch (error) {
      console.error("Failed to load todos from localStorage", error);
      setTodos([]);
    }
  }, []);

  useEffect(() => {
    if (todos && todos.length > 0) {
      // Only save to localStorage if there are todos to save
      localStorage.setItem("todos", JSON.stringify(todos));
      //JSON.stringify converts a JavaScript object into a JSON string.
      //setItem to store data
    }
  }, [todos]);


  return (
    <TodoProvider value={{ todos, addTodo, editTodo, deleteTodo, toggleCheck }}> {/* Provide todos and functions to children */}
      <div className='bg-gradient-to-br from-[#f17c8f] to-[#cc88dd] min-h-screen py-8 '>
        <h1 className='font-bold text-2xl mx-auto text-white bg-[#ffffff1f] max-w-fit rounded-lg p-3 border border-pink-300 shadow-lg text-shadow-md'>CheckMate</h1> {/* Title */}

        <img src="checklist.png" alt="" className='drop-shadow-2xl text-shadow-lg w-72 mx-auto ' />

        <div>
          {/* To-do input field */}
          <InputTodo />

        </div>
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              <Task todo={todo} />
            </div>

          ))}
        </div>
      </div>


    </TodoProvider>
  )
}

export default App

