import React, {useState, useEffect} from 'react'
import axios from "axios"

function AxiosStateHook(){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos/1")
        .then(response => {
            setLoading(false)
            setError('')
            setPost(response.data)
        })
        .catch(err => {
            setLoading(false)
            setError(`${err} sth went wrong`)
            setPost({})
        })
    },[])

    return (
        <div>
            {loading? "loading":post.title}
            {error?error:null}
        </div>
    )
}

export default AxiosStateHook



 

