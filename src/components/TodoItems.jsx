import React, { useCallback, useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'


const TodoItems = () => {

    const { items, setItems } = useContext(TodoContext);
    const [updateText, setUpdateText] = useState("")

    const deleteTodo = (id) => {
        let findTodo = items.filter((item) => item.id !== id)
        setItems(findTodo);
    }

    const renameTodo = (id) => {


        setItems(
            items.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isUpdate: true }

                } else {
                    return { ...todo }
                }
            })
        )

        let findTodo = items.find((item) => item.id === id)
        setUpdateText(findTodo.name)

    }

    const updateTodo = (id) => {

        setItems(
            items.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, name: updateText, isUpdate: false }
                } else {
                    return { ...todo }
                }

            })
        )
    }

    const toggleCompleted = (id) => {
        setItems(items.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }))
    }

    {
        return (

            items.map((item) => {
                return (
                    <div className={`mt-4 flex justify-between w-[60%] ${item.completed ? "bg-[#C3E7A7]" : "bg-[#CBBBD4]"} p-2 rounded-md`} key={item.id}>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="checkbox" defaultChecked={item.completed} onClick={() => toggleCompleted(item.id)} />
                            {
                                item.isUpdate ? (
                                    <input type="text" className='outline-none' value={updateText} onChange={(e) => setUpdateText(e.target.value)} />
                                ) :
                                    (
                                        <h1 className={item.completed ? "line-through" : ""}>{item.name}</h1>
                                    )
                            }
                        </div>
                        <div className='flex gap-4 text-center'>
                            {
                                item.isUpdate ?
                                    (<h1 onClick={() => updateTodo(item.id)} className='text-xl cursor-pointer'>☑️</h1>)
                                    :
                                    (<h1 onClick={() => renameTodo(item.id)} className='text-xl cursor-pointer'>✍️</h1>)

                            }
                            <h1 onClick={() => deleteTodo(item.id)} className='text-xl cursor-pointer'>❎</h1>
                        </div>
                    </div>
                )
            })


        )
    }
}

export default TodoItems
