import { useContext } from "react"
import { IUserData } from "../components/card/interfaces"
import { api } from "./api"
import { AppContext } from "../components/appcontext"
import { useNavigate } from "react-router-dom"

export const login = async (email: string): Promise<void> => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {setIsLoggedIn} = useContext(AppContext)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate()
    
    const data = await api as IUserData

    if (email !== data.email) {
        return alert("Email inválido")
    }

    setIsLoggedIn(true)
    navigate(`/${data.id}`)
    alert("Bem vindo a minha aplicação de teste " + email)
}