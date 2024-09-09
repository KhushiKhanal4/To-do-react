import React from 'react'
import { BiSolidEditAlt } from "react-icons/bi"; // Icon for the edit button
import { IoSaveSharp } from "react-icons/io5"; // Icon for the save button
import { RiDeleteBin5Fill } from "react-icons/ri"; // Icon for the delete button
import { useTodo } from '../contexts/TodoContext'; // Custom hook to access todo functions from context
import { useState } from 'react';


function Task({ todo }) {//prop todo
  const [isEditable, setIsEditable] = useState(false); // Local state to toggle between edit and display mode
  const [content, setContent] = useState(todo.task); // Local state for managing task content while editing
  const { editTodo, deleteTodo, toggleCheck } = useTodo(); // Accessing context functions

  // Function to handle editing a task
  const edit = () => {
    editTodo(todo.id, { ...todo, task: content }); // Update the task in the context using the editTodo function
    setIsEditable(false); // Turn off edit mode
  }

  // Function to handle checking/unchecking the todo item
  const check = () => {
    toggleCheck(todo.id); // Toggle the 'completed' status of the task
  }

  return (
     
    <div  className={`mx-auto rounded-md p-1 my-4 w-[75%] flex justify-between items-center gap-2  border-pink-100 border-2  md:w-[57%] lg:w-[44%] ${todo.completed ? "bg-gradient-to-l from-[#69e1f3d2] to-[#f2d0fad3]" : "bg-gradient-to-l from-[#e8c5f3c5] to-[#dd92f0d3]"}`}
    >{/*  dynamically setting the className depending on the value of isEditable */}
     
      {/* Checkbox to mark task as completed */}
      <input type="checkbox"
        className="mx-1 bg-red-100 border-red-300 rounded-sm text-[#ca4878d8] focus:ring-red-200 focus:ring-1 cursor-pointer" 
        checked={todo.completed}
        onChange={check} // Toggles the 'completed' state
      />

      {/* Task content that can be either read-only or editable */}
      <input type="text"
        className={`bg-transparent text-white font-semibold tracking-wider capitalize text-shadow-md outline-none focus:ring-0 focus:outline-none border-0 border-spacing-0 w-4/6 rounded-md  md:w-9/12 lg:w-10/12 ${todo.completed ? "line-through" : ""} ${isEditable ? " outline-white  focus:ring-white focus:outline-white my-2" : "border-transparent"}`}
        value={content} //wiring
        onChange={(e) => setContent(e.target.value)} // Updates content state during editing
        readOnly={!isEditable} // Read-only unless in edit mode
      />


    {/* Edit/Save button: Toggles between editing and saving based on isEditable state */}
    <button
       className='bg-white p-2 rounded-lg border border-violet-200 hover:bg-violet-300 transition-all duration-200 cursor-pointer'
        onClick={() => {
          if (todo.completed) return; // Prevent editing if the task is completed
          if (isEditable) {
            edit(); // Save the task if in edit mode
          } else setIsEditable(prev => !prev); // Otherwise, switch to edit mode
        }}
        disabled={todo.completed} // Disable editing if task is completed
      >
        {isEditable ? <IoSaveSharp /> : <BiSolidEditAlt />} {/* Icon changes based on the mode */}
      </button>

      {/* Delete button to remove the task */}
      <button
        className='bg-white p-2 rounded-lg border border-violet-200 hover:bg-violet-300 transition-all duration-200 cursor-pointer'
        onClick={() => deleteTodo(todo.id)} // Call deleteTodo to remove the task
      >
        <RiDeleteBin5Fill />
      </button>
    </div>
  );
}

export default Task;