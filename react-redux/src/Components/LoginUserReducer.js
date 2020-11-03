import React, {useReducer} from 'react'
import "../CSS/login.css"



const intialState = {
    fName: "First Name",
    lName: "last Name",
    email: "Email",
    password: "",
    loading: true,
    signUpSuccess: false,
    SignUpFailure: true,
    error: ""
}

const reducer = (state, action) =>{
    switch (action.type){

        case "FIRST_NAME":
            return{...state, fName: action.payload.fName}
        case "LAST_NAME":
            return{...state, lName: action.payload.lName}
        case "EMAIL":
            return{...state, email: action.payload.email}
        case "PASSWORD":
            return{...state, password: action.payload.password}
        case "LOADING_PAGE":
            return{
                ...state, loading: true
            }
        case "SIGNUP_FAIL":
        return{
            ...state, loading:false, error: "Something wrong please check"
        }
        case "SIGNUP_SUCCESS":
            return{...state, signUpSuccess: true, SignUpFailure: false}
                // fName: action.payload.fName, 
                // lName: action.payload.lName,
                // email: action.payload.email,
                // password: action.payload.password}
            default: return state
    }

}



function LoginUserReducer() {

    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <div>
           <form className = 'container' onClick = {console.log("hi")}>
                <div className ="flex-input">
                    <label >First Name </label>
                    <input type = "text" onInput = {e => dispatch({
                        type:"FIRST_NAME",
                        payload: e.target.value
                    })} placeholder = " First Name"/>
                </div>
                <div className ="flex-input">
                    <label >Last Name </label>
                    <input type = "text" onInput = {e => dispatch({
                        type:"LAST_NAME",
                        payload: e.target.value
                    })} placeholder = " Last Name"/>
                </div>
                <div className ="flex-input">
                    <label >Email </label>
                    <input type = "text" onInput = {e => dispatch({
                        type:"EMAIL",
                        payload: e.target.value
                    })} placeholder = " Email"/>
                </div>
                <div className ="flex-input">
                    <label>Password  </label>
                    <input type = "text" onInput = {e => dispatch({
                        type:"PASSWORD",
                        payload: e.target.value
                    })} placeholder = "Password"/>
                </div>
                <button className = "flex-button" onClick = {dispatch({
                    type:"SIGNUP_SUCCESS"
                })} >Sign up</button>
            </form>

            
        </div>
    )
}

export default LoginUserReducer
