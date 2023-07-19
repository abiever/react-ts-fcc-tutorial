import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../context'
import { Input } from './Input'

export const AddTodo = () => {
  //By specifying <string> after the useState function, we ensure that the state variable input can only hold values of type string. This prevents users from entering numbers or any other incompatible data types as todos.
  const [input, setInput] = useState<string>('')

  //string[] specifies the type of data that will be stored in the todos state variable. In this case, it is an array of strings, meaning it will hold a list of todo items, where each item is represented as a string.
  const [todos, setTodos] = useState<string[]>([])

  //useRef is a special hook in React that creates a reference to an element or value in your component. This reference can be used to access and manipulate the referenced element directly, without causing re-renders.
  const inputRef = useRef<HTMLInputElement>(null)

  //uses the useTodo hook to retrieve the addTodo function from the todo context. This allows us to add new todo items.
  const { addTodo } = useTodo()

  //In the useEffect hook, inputRef.current is checked to see if it exists. If it does, the focus() method is called on it, which means the input field will receive focus when the component is mounted.
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  //(e: React.FormEvent) is the function's parameter declaration. It specifies that the function expects an event object of type React.FormEvent to be passed as an argument. The React.FormEvent is a type of event object that represents an event occurring on a form element, such as submitting the form or interacting with form fields.
  const handleSubmission = (e: React.FormEvent) => {
    //By calling preventDefault(), we override the default behavior and prevent the page from refreshing.
    e.preventDefault()
    if (input.trim() !== '') {
      addTodo(input)
      setInput('') //resets the input value to an empty string
      toast.success('Todo added successfully!')
    } else {
      toast.error('Todo field cannot be empty!')
    }
  }

  return (
    <form onSubmit={handleSubmission}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <Input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
          placeholder="start typing ..."
        />
        <button
          type="submit"
          className="px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
