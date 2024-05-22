import React, { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();


export const TodoContextProvider = ({ children }) => {

    const getLocalHostItems = () => {
        let list = localStorage.getItem('list')
        if (list) {
            return JSON.parse(localStorage.getItem('list'))
        }
    }


    const [todo, setTodo] = useState("");
    const [items, setItems] = useState(getLocalHostItems());


    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(items))
    }, [items])

  
    return (
        <>
            <TodoContext.Provider value={{ todo, setTodo, items, setItems }}>
                {children}
            </TodoContext.Provider>
        </>
    )
}