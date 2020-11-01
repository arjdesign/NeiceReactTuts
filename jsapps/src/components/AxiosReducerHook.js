import React from 'react'
import {useReducer, useEffect} from "react"
import axios from 'axios'

export const PostContext = React.createContext()



const initialState = {
    loading:true,
    error: "",
    post: {}

}

const reducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
        return({
            loading: false,
            error: "", 
            post:action.payload
        })
        case "ERROR":
            return ({
                loading: false,
                error: "shit happened",
                post: {}
            })
        default:
            return(state)
      
    }
}


function AxiosReducerHook() {

    const [state, dispatch] = useReducer( reducer, initialState)

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/photos/1")
        .then(response => dispatch({
            type: "SUCCESS",
            payload: response.data
            
        }))
        .catch(error => dispatch({
            type:"ERROR"
        }))
    }, [])


    return (
        <PostContext.Provider value= {{state:state, dispatch:dispatch}}>
            <div>
            <button>Display</button>
            {state.loading? "chill.. its loading":state.post.title}
            
            {state.error? state.error: null}
            
        </div>

        </PostContext.Provider>
        
    )
}

export default AxiosReducerHook