//https://codesandbox.io/s/lively-bird-i7ypi

import React  from "react"
import {Todo, ToggleComplete, DeleteItem} from "../type/types"
import {initialTodo} from '../store/initialTodo'

interface ToDoListItemProps {
todo: Todo;
useToggleComplete:ToggleComplete;
useDeleteItem?: DeleteItem

}

export const ToDoListItems: React.FC<ToDoListItemProps> = (props) =>{
    return(
       <li>
           <label className= {props.todo.complete? "Complete": undefined}>
               <input type="checkbox"
               onChange = {() => props.useToggleComplete}
               checked ={props.todo.complete}/>
               {props.todo?.text}
               <button onClick = { ()=> props.useDeleteItem}>Delete</button>
           </label>

       </li>
    )
}