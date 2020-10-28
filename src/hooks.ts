export const hooks = () => {
    console.log("hooks")
}

// import {Todo, AddItem, DeleteItem, ToggleComplete} from './type/types'
// import {useState} from 'react'
// import {initialTodo} from './store/initialTodo'


// //update specific value of the object
// export function useToggleComplete<ToggleComplete>(selectedItem: Todo){
//     const [todos, setTodos] = useState(initialTodo)
//     const updatedTodos = todos.map(todo => {
//         if (todo === selectedItem){
//             return {...todo, complete:todo.complete }
//         }
//         return todo
//     })
//     setTodos(updatedTodos)
    
//     return [todos]

// }

// //delete value by using filter
// export const useDeleteItem:DeleteItem = (selectedItem:Todo  ) =>  { 
//     const [todos, setTodos] = useState<Array<Todo>>(initialTodo)
//         const updatedTodos = todos.filter((item) =>item.text!== selectedItem.text)
//         setTodos(updatedTodos)
//     return [todos]
//     }

// //adding 
// export const useAddItem: AddItem = (item:string) =>{
//     const [todos, setTodos ] = useState("initialTodo")
//     const newTodoItem = {
//         text:item,
//         importance:"high",
//         complete:false
//     }
//     setTodos([...todos, newTodoItem])
//     return [todos]
// }


// // //delete value by using filter
// // export const deleteItem:DeleteItem = (selectedItem:Todo  ) =>  { 
// //     const [todos, setTodos] = useState<Array<Todo>>(initialTodo)
// //         const updatedTodos = todos.filter((item) =>item.text!== selectedItem.text)
// //         setTodos(updatedTodos)
// //     return todos
// //     }

// // //adding 
// // export const addItem: AddItem = (item:string) =>{
// //     const [todos, setTodos ] = useState(initialTodo)
// //     const newTodoItem = {
// //         text:item,
// //         importance:"high",
// //         complete:false
// //     }
// //     setTodos([...todos, newTodoItem])
// // }
