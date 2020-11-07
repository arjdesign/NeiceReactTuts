import React, {useState} from 'react'

function FavouriteNumber({min = 1, max = 9}) {
    const [number, setNumber] = useState(0)
    const [numberEntered, setNumberEntered] = useState(false)

    function handleChange (e){
        Number(setNumber(e.target.value))
        setNumberEntered(true)}

        const isValid = !numberEntered || (number >= min && number <= max)
        return (
            <div>
                <label htmlFor = "favourite-number" >Favourite number</label>
                <input id = "favourite-number"
                        type = 'number'
                        //has value controlled 
                        value = {number}
                        onChange = {handleChange}
                />
                {isValid? null: alert("number is invalid")}
                
            </div>
        )

    }

   


export default FavouriteNumber
