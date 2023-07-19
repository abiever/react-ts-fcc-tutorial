import React, { createContext, useState } from 'react'
import { nanoid } from 'nanoid'
import { useLocalStorage } from 'usehooks-ts'

//In summary, you are using TypeScript to define an interface for the TodoContextProps, adds a new todo using useState and a custom function, and provides the updated context value to the child components.

interface TodoContextProps {
  todos: Todo[]
  addTodo: (text: string) => void
  deleteTodo: (id: string) => void
  editTodo: (id: string, text: string) => void
  updateTodoStatus: (id: string) => void
}

//The Todo interface defines the structure of a todo item.
//It consists of three properties: id (a string), text (a string representing the content of the todo item), and status (a string that can have the value 'undone' or 'completed').
//This interface helps ensure that todo items have consistent properties and data types.
export interface Todo {
  id: string
  text: string
  status: 'undone' | 'completed'
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined,
)

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([])

  // ::: ADD NEW TODO :::
  //The addTodo function takes a text parameter, generates a unique ID using nanoid, and creates a new todo object with the provided text and an initial status of 'undone'.
  //It uses the setTodos function, provided by useLocalStorage, to update the todos state by appending the newTodo to the existing array of todos.
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: nanoid(),
      text,
      status: 'undone',
    }

    setTodos([...todos, newTodo])
  }

  // ::: DELETE A TODO :::
  //The deleteTodo function takes an id parameter and uses the setTodos function to filter out the todo item with the matching id from the todos state.
  const deleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  // ::: EDIT A TODO :::
  //The editTodo function takes an id and text parameter.
  //It uses the setTodos function to map over the todos state and update the text of the todo item with the matching id.
  const editTodo = (id: string, text: string) => {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, text }
        }
        return todo
      })
    })
  }

  // ::: UPDATE TODO STATUS :::
  //The updateTodoStatus function takes an id parameter.
  //It uses the setTodos function to map over the todos state and toggle the status of the todo item with the matching id between 'undone' and 'completed'.
  const updateTodoStatus = (id: string) => {
     setTodos(prevTodos => {
      return prevTodos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              status: todo.status === 'undone' ? 'completed' : 'undone',
            }
          }
          return todo
        })
      })
  }

  //Creating the value for the context: The value variable is assigned an object of type TodoContextProps, containing the todos array and the addTodo function.
  const value: TodoContextProps = {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
    updateTodoStatus,
  }

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  )
}
