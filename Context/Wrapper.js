import React, { createContext, useState } from 'react'

export const Store = createContext()

export const Wrapper = ({ children }) => {
    const [data, setdata] = useState()
    return (
        <Store.Provider value={{ data, setdata }}>
            {children}
        </Store.Provider>
    )
} 