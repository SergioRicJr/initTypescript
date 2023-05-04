import React, { createContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const contextEmail = createContext({} as {email?: string})

const ContextEmailProvider = ({children}: any) => {
    const [email, setEmail] = useState<string>()
    const localStorageMy = localStorage.getItem("infoUserLogado")
    
    useEffect(()=> {
        if(localStorageMy) {
            setEmail(JSON.parse(localStorageMy))
        }
    }, [])

   
    return (
        <contextEmail.Provider value={{email: email}}>
            {children}
        </contextEmail.Provider>
    )
    }

export default ContextEmailProvider
