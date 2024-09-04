import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos :[
        {
            id:1,
            task:"input",
            completed:false
        }   
    ],
    addTodo :(task)=>{},
    editTodo :(id,task)=>{},
    deleteTodo:(id)=>{},
    toggleCheck:(id)=>{}
    
})

export const useTodo= ()=> {
    return(
        useContext(TodoContext)
    )
}

export const TodoProvider=TodoContext.Provider