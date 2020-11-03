import React from 'react'
import "../CSS/login.css"
import {useState} from 'react'



function LoginUseState() {
    //create states
    const [fName, setFname] = useState("First Name")
    const [lName, setLName] = useState("Last Name")
    const [email, setEmail] = useState("valid email address")
    const [password, setPassword] = useState("min 8 digit")
    const [loading, setLoading] = useState(true)
    const[error, setError] = useState("")

 

    const handleClick = ()=>(
        alert(`THe user is ${fName} `)  
    )

    return (
        <div>
            <form className = 'container' onClick = {console.log("hi")}>
                <div className ="flex-input">
                    <label >First Name </label>
                    <input type = "text" onInput = {e => setFname(e.target.value)} placeholder = " First Name"/>
                </div>
                <div className ="flex-input">
                    <label >Last Name </label>
                    <input type = "text" onInput = {e => setLName(e.target.value)} placeholder = "Last Name"/>
                </div>
                <div className ="flex-input">
                    <label >Email </label>
                    <input type = "text" onInput = {e => setEmail(e.target.value)} placeholder = "Email"/>
                </div>
                <div className ="flex-input">
                    <label>Password  </label>
                    <input type = "text" onInput = {e => setPassword(e.target.value)}  placeholder = "password"/>
                </div>
                <button className = "flex-button" onClick = {handleClick} >Sign up</button>
            </form>
            
        </div>
    )
}

export default LoginUseState

