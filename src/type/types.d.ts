export interface Todo{
    text: string,
    importance?: string,
    complete:boolean
}

// Remember: interface are good at defining object and type for functions. 
export type AddItem = (item:string) => void

export type DeleteItem = () => void

export type ToggleComplete = (selectedItem: Todo) => void