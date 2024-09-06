import React from 'react'
import { useTodo } from '../contexts';
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
    <div>
    
    </div>
  );
}



export default Task