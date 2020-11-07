import React, {useContext} from 'react'
import {PostContext} from './AxiosReducerHook'



function UseContextHook() {
    const {poststate, postdispatch} = useContext(PostContext)
    return (
        <div>
            {poststate.loading? "chill.. its loading": poststate.post.title}
            
            {poststate.error? poststate.error: null}
         
            <button>Button</button>
            
        </div>
    )
}

export default UseContextHook
