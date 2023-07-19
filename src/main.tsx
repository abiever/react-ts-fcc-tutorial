import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodoProvider } from './context'

//You need to wrap your entire app with the TodoProvider component. This ensures that the context values are accessible to its children components by utilizing the useTodo hook:
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/*<TodoProvider> wraps the entire application and provides the necessary context for managing todo-related data. */}
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
)
