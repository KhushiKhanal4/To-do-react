import React from 'react'
import { useTodo } from "../contexts/TodoContext" // Import the custom hook to access the todo context
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Importing unique id generator

function InputTodo() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;
    addTodo({ id: uuidv4(), task:todo, completed: false });
    setTodo("");

  }

  return (
    <form onSubmit={add} className='flex justify-center'>
      {/* Input field for adding todos */}
      <input
        type="text"
        placeholder='Add your todos here...'
        className='w-[60%] px-2 py-1 bg-[#ffffff3f] rounded-s-md border border-pink-200 outline-none focus:outline-none focus:ring-pink-300 focus:ring-2 placeholder:text-white placeholder:font-medium placeholder:text-shadow-md shadow-xl md:w-1/2 lg:w-[40%] lg:py-2 lg:placeholder:text-xl' 
        required
        value={todo} // Binds the state variable to the input value
        onChange={(e) => setTodo(e.target.value)} // Updates the state on user input
      />

      {/* Button to submit the new todo */}
      <button
        type='submit'
        className='px-2 py-1 bg-white border-2 border-white rounded-e-md text-black font-bold shadow-xl hover:bg-violet-300  transition-all duration-200  hover:text-shadow-sm hover:border-white'> 
        ADD
      </button>
    </form>
  )
}

export default InputTodo;


