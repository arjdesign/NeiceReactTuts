//it has the add function and the userinput
import React, {ChangeEvent, FormEvent, useState} from 'react'
import {AddItem} from '../type/types'


 interface AddToDoFormProps {
    
    useAddItem: AddItem
    //you could define other functions that you want to execute right here
    //along with their parameters and return statements.

}

export const AddToDoForm: React.FC<AddToDoFormProps> =(props) =>{
    const [newtodo, setNewtodo]= useState("")

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) =>{
        e.preventDefault()
         props.useAddItem(newtodo)

    }
        

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => (setNewtodo(e.target.value))
    return(
        <div>
            <input type= "text" onChange = {handleChange}></input>
            <button type ="button" onClick  = {handleSubmit}>Add</button>
        </div>
    )
} 