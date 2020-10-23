import React, {useState} from 'react'
import {Todo, ToggleComplete, DeleteItem} from '../type/types'
import {initialTodo} from '../store/initialTodo'
import {ToDoListItems} from '../Componenets/TodoListItems'

interface TodoListProps {
    todos: Array<Todo>
    toggleComplete: ToggleComplete
    deleteItem: DeleteItem
    

}


export const TodoList:React.FC<TodoListProps> =(props) =>{
//next useEffect right here.
    const [todos, setTodos] = useState(initialTodo)

    const toggleComplete = (selectedTodo:Todo) => {
        const updatedTodos = todos.map((todo) => {
            if (todo === selectedTodo){
                return{
                    ...todo, complete:todo.complete
                }
            }
            return todo
        });
        setTodos(updatedTodos)
        
    }

    const deleteItem = () => {
        return console.log("deleted");
        }
    
    
    return (
        <ul>
            {todos.map(todo =>
                (
                <ToDoListItems 
                todo ={todo}
                toggleComplete={toggleComplete}
                deleteItem = {deleteItem}
                >   
    
                </ToDoListItems>
            ))}
        </ul>
    )

}
