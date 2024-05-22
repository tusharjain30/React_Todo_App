import React from 'react'
import UserInput from './components/UserInput'
import TodoItems from './components/TodoItems'

const App = () => {
  return (
    <>
      <div className='h-screen w-screen bg-[#15243D] flex flex-col items-center'>
        <UserInput />
        <TodoItems />
      </div>
    </>
  )
}

export default App
