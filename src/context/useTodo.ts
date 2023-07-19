import { useContext } from 'react'
import { TodoContext } from './TodoContext'


//Overall, this code allows you to create a custom hook named useTodo that can be used within your components.
//By calling this hook, you can access the TodoContext and retrieve its value, which includes the todo-related data and functions defined in the TodoProvider.
export const useTodo = () => {
  const context = useContext(TodoContext)

  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }

  return context
}
