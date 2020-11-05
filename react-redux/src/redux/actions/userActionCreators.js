import {USER_LOADING_FAILURE, USER_LOADING, USER_LOADING_SUCCESS} from './actionTypes'
import axios from 'axios'

//user action creators

export const userLoading = () => ({
    type: USER_LOADING
})

export const userLoadingSuccess = (user) =>({
    type: USER_LOADING_SUCCESS,
    payload: user
})

export const userLoadingFailure = (error) => ({
    type: USER_LOADING_FAILURE,
    payload: error
})


//async action

export const fetchUser = (api = "https://jsonplaceholder.typicode.com/users") => {
   return {
       function (dispatch){
           dispatch(userLoading())
           axios.get(api)
           .then(response => {
               //this is the safe strategy becasue of the 
               const user = response.data
               dispatch(userLoadingSuccess(user))})
           .catch(err => {
               const error = err.message
               dispatch(userLoadingFailure(error))
           })

       }
   }
}