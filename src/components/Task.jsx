import React from 'react'
import { BiSolidEditAlt } from "react-icons/bi";
import { IoSaveSharp } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useTodo } from '../contexts/TodoContext';
import { useState } from 'react';

function Task({ todo }) {
  const [isEditable, setIsEditable] = useState(false)
  const [content, setContent] = useState(todo.task)
  const { editTodo, deleteTodo, toggleCheck } = useTodo();

  const edit = () => {
    editTodo(todo.id, { ...todo, task: content })
    setIsEditable(false)
  }

  const check = () => {
    toggleCheck(todo.id)
  }

  return (
    <div className={`mx-auto rounded-md p-1 my-4 w-[75%] flex justify-between items-center gap-2   border-pink-100 border-2  md:w-[57%] lg:w-[44%] ${todo.completed ? "bg-[#61fd6185]" : "bg-[#ffc0cb9a]"}`}
    >
      <input type="checkbox"
        className="mx-1 bg-red-100 border-red-300 rounded-sm text-[#ca4878d8] focus:ring-red-200 focus:ring-1" checked={todo.completed}
        onChange={check} />

      <input type="text"
        className={`bg-transparent focus:outline-none border-0 border-spacing-0 w-4/6 rounded-md cursor-pointer focus:ring-1 focus:ring-lime-200 md:w-9/12 lg:w-10/12 ${todo.completed ? "line-through" : ""} ${isEditable ? "border-lime-300" : "border-transparent"}`}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        readOnly={!isEditable}
      />

      <button
        className='bg-lime-300 p-2 rounded-lg border border-lime-100 hover:bg-lime-400 '
        onClick={() => {
          if (todo.completed) return
          if (isEditable) {
            edit();
          }
          else setIsEditable((prev) => (!prev))
          }
        }
        disabled={todo.completed}
        >
           {isEditable ? <IoSaveSharp /> : <BiSolidEditAlt />}

        
      </button>

      <button className='bg-lime-300 p-2 rounded-lg border border-lime-100 hover:bg-lime-400'
      onClick={() => deleteTodo(todo.id)}>
        <RiDeleteBin5Fill />
      </button>

    </div>
  );
}



export default Task