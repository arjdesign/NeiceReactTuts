//Create messages

export const createMessage = (message: string) => {
    return {
        type: "CREATE_MESSAGE",
        payload: message
    }

}


export const returnErrors = (errorMessage: string, errorStatus: number) => {
    return{
        type: "GET_ERRORS", 
        payload: {errorMessage, errorStatus}
    }

}