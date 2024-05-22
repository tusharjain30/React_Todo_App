import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const UserInput = () => {

    const { todo, setTodo, setItems } = useContext(TodoContext)

    const AddItem = (e) => {
        e.preventDefault();
        
        if(todo){
            setItems((prev) => [...prev, { id: Date.now(), name: todo, completed: false, isUpdate: false }]);
        }else{
            alert("Please provide a item");
        }

        setTodo('')
    }

    return (

        <div className='flex flex-col w-[80%] mt-[4rem]'>
            <h1 className='text-white text-center text-2xl font-semibold pb-6'>Manage Your Todos</h1>
            <div className='flex'>
                <input type="text" placeholder="Write Todo..."
                    className="w-full font-semibold p-2 outline-none rounded-l-md font-bold"
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                />
                <button className='p-2 text-sm bg-[#129F48] duration-200 transition-all ease-linear hover:bg-green-500 text-white font-semibold rounded-r-md'
                    onClick={AddItem}>Add
                </button>
            </div>
        </div>

    )
}

export default UserInput
