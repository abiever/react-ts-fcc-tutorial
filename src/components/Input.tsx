//In React, the forwardRef function is a feature that allows you to pass a ref from a parent component to a child component. Refs are used to access and manipulate the underlying DOM elements directly.
import { InputHTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'

import React from 'react'

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...rest }, ref) => {
  return (
    <input
      {...rest}
      ref={ref}
      className={cn(
        'w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white',
        className,
      )}
    />
  )
})
