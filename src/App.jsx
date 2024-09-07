
import React, { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import InputTodo from './components/InputTodo';
import Task from './components/Task';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo },...prev])
  }

  const editTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => (prev.filter((prevTodo) => (prevTodo.id !== id))))

  }
  const toggleCheck = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    // Retrieve todos from localStorage and safely parse them
    try {
      const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      setTodos(savedTodos);
    } catch (error) {
      console.error("Failed to load todos from localStorage", error);
      setTodos([]);
    }
  }, []);
  
  useEffect(() => {
    if (todos.length > 0) {
      // Only save to localStorage if there are todos to save
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);
  

  return (
    <TodoProvider value={{ todos, addTodo, editTodo, deleteTodo, toggleCheck }}>
      <div className='bg-gradient-to-br from-[#f17c8f] to-[#cc88dd] min-h-screen py-8 '>

        <h1 className='font-bold text-2xl mx-auto text-[#050505d3] bg-[#ffffff94] max-w-fit rounded-lg p-3 border border-pink-300 shadow-lg text-shadow-md'>CheckMate</h1>

        <img src="checklist.png" alt=""
          className='drop-shadow-2xl text-shadow-lg w-72 mx-auto ' />

        <div>
          {/* To-do input field */}
          <InputTodo />

        </div>
         <div>
          {todos.map((todo)=>(
            <div key={todo.id}>
              <Task todo={todo}/>
            </div>

          ))}
         </div>
       </div> 

      
    </TodoProvider>
  )
}

export default App