
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchUser } from '../redux/actions/userActionCreators'

const api = "https://jsonplaceholder.typicode.com/users"
function AccessAPIData(props) {
    

    useEffect(() =>{
        props.fetchUser(api)
    },[api])

    return props.users.loading? (
            <div>
           Loading....
            
        </div> 
        ):props.userData.error ?(
            <h2>
                {props.userData.error}
            </h2>
        ): (
            <div>
                <h2>
                    User List
                </h2>
                <div>
                     {props.userData && props.userData.users && 
                     props.userData.users.map(user =><p>{user.name}</p>)}   
                    </div>
            </div>
        )
        
    
}

const mapStateToProps = (state) => {
    return{
        userData: state.users
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () =>dispatch(fetchUser(api))
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AccessAPIData)
