import React, {useState} from 'react'
import {Todo, ToggleComplete, DeleteItem} from '../type/types'
import {initialTodo} from '../store/initialTodo'
import {ToDoListItems} from '../Componenets/TodoListItems'

interface TodoListProps {
    todos: Array<Todo>;
    useToggleComplete: ToggleComplete;
    useDeleteItem?: DeleteItem;
}


export const TodoList:React.FC<TodoListProps> =(props) =>{  
    return (
        <ul>
            {props.todos.map(todo =>
                (
                <ToDoListItems 
                todo ={todo}
                key = {todo.text}
                useToggleComplete={props.useToggleComplete}
                useDeleteItem = {props.useDeleteItem}
                >   
    
                </ToDoListItems>
            ))}
        </ul>
    )

}
