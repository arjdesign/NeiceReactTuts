import React, {useState} from 'react';
import './App.css';
import {TodoList} from './Componenets/TodoList'
import { AddToDoForm} from './Componenets/AddToDoForm'
import {initialTodo} from './store/initialTodo'
import {AddItem, Todo, ToggleComplete} from './type/types'

//import {useAddItem, useDeleteItem, useToggleComplete} from './hooks'

const App:React.FC = (props) =>{
  const [todos, setTodos] = useState<Array<Todo>>(initialTodo);
  const useToggleComplete: ToggleComplete = (selectedTodo:any) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: todo.complete };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const useaddItem: AddItem = (newTodo:string) => {
    //trim() method removes whitespace from both ends of a string
    newTodo.trim() !== "" &&
      setTodos([...todos ]);
  };

  return (
    <div className="App">

      const 
      <TodoList
      todos = {todos}
      useToggleComplete ={useToggleComplete}
      
      />
      <AddToDoForm
      useAddItem = {useaddItem}
      />
      

     
    </div>
  );
}

export default App;
