import { useContext } from "react"
import { IUserData } from "../components/card/interfaces"
import { api } from "./api"
import { AppContext } from "../components/appcontext"
import { useNavigate } from "react-router-dom"

export const login = async (email: string): Promise<boolean> => {
    // const {setIsLoggedIn} = useContext(AppContext)
    
    // const navigate = useNavigate()
    
    const data = await api as IUserData

    if (email !== data.email) {
        return false
    }
    // setIsLoggedIn(true)
    // navigate(`/${data.id}`)
    return true
    // alert("Bem vindo a minha aplicação de teste " + email)
}