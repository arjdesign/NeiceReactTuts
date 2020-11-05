
import {USER_LOADING_FAILURE, USER_LOADING, USER_LOADING_SUCCESS} from '../actions/actionTypes'
import {initialUsers} from '../../model'

export const userReducer = (state= initialUsers, action) =>{
    switch(action.type) {
        case USER_LOADING:
            return{
                ...state,
                loading: true,  
            }
        case USER_LOADING_SUCCESS:
            return{
                ...state,
                loading: false,
                users: action.payload
            }
        case USER_LOADING_FAILURE:
            return{
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state
    }
}