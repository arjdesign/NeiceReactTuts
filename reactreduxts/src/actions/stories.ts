import axios from 'axios'
import {createMessage, returnErrors} from './messages'


//get posts

export const getPostList =(dispatch:object) =>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then(result =>{
        dispatch({
            type: "GET_POSTS",
            payload: result.data
        })
    })

}
