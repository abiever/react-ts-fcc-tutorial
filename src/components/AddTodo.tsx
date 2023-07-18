import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../context'
import { Input } from './Input'

export const AddTodo = () => {
  //By specifying <string> after the useState function, we ensure that the state variable input can only hold values of type string. This prevents users from entering numbers or any other incompatible data types as todos.
  const [input, setInput] = useState<string>('')

  return (
    <form>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <input
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
