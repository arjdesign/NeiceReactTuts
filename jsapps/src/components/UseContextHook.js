import React, {useContext} from 'react'
import {PostContext} from './AxiosReducerHook'



function UseContextHook() {
    const {state} = useContext(PostContext)
    return (
        <div>
            {state.loading? "chill.. its loading": state.post.title}
            
            {state.error? state.error: null}
            
        </div>
    )
}

export default UseContextHook
