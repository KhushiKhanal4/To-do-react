import React from 'react'
import { useTodo } from "../contexts/TodoContext"
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function InputTodo() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;
    addTodo({ id: uuidv4(), todo, completed: false });
    setTodo("");

  }

  return (
    <form onSubmit={add} className='flex justify-center'>
      <input
        type="text"
        placeholder='Add your todos here...'
        className='w-[60%] px-2 py-1 bg-[#ffffff3f] rounded-s-md border border-pink-200 focus:outline-none focus:ring-lime-400 focus:ring-2 placeholder:text-lime-300 placeholder:font-medium shadow-xl md:w-1/2 lg:w-[40%] lg:py-2 lg:placeholder:text-xl'
        required
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button
        type='submit'
        className='px-2 py-1 bg-lime-300 border border-pink-200 rounded-e-md text-pink-500 font-bold shadow-xl hover:bg-lime-400 hover:text-pink-700'
      >
        ADD
      </button>
    </form>
  )
}

export default InputTodo