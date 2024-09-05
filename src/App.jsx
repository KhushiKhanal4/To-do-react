
import React, { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import InputTodo from './components/InputTodo';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo }, ...prev])

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
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos) {
      setTodos(todos);
    }


  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])


  return (
    <TodoProvider value={{ todos, addTodo, editTodo, deleteTodo, toggleCheck }}>
      <div className='bg-gradient-to-br from-[#ec3d5a] to-[#eb9ba9] min-h-screen py-8 '>

        <h1 className='font-bold text-2xl mx-auto text-lime-300 bg-[#ffffff25] max-w-fit rounded-lg p-3 border border-pink-300 shadow-lg'>CheckMate</h1>

        <img src="public\3d-render-checklist-alarm-clock-project-plan (1).png" alt=""
          className='drop-shadow-2xl w-72 mx-auto ' />

        <div>
          {/* To-do input field */}
          <InputTodo />

        </div>

        <div>
          {/* To-do task list */}
        </div>


      </div>
    </TodoProvider>
  )
}

export default App