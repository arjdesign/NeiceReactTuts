//https://codesandbox.io/s/lively-bird-i7ypi

import React  from "react"
import {Todo, ToggleComplete, DeleteItem} from "../type/types"
import {initialTodo} from '../store/initialTodo'

interface ToDoListItemProps {
todo?: Todo;
toggleComplete?:ToggleComplete;
deleteItem?: DeleteItem

}

export const ToDoListItems: React.FC<ToDoListItemProps> = (props) =>{
    return(
       <li>
           <label >
               <input type="checkbox"
               onChange = {() => props.toggleComplete}
               checked ={props.todo?.complete}/>
               {props.todo?.text}
               <button onClick = { ()=> props.deleteItem}>Delete</button>
           </label>

       </li>
    )
}