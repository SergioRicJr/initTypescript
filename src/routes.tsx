import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Login from "./pages/login"
import { Conta } from "./pages/conta"
import ContaInfo from "./pages/contaInfo"
import { AppContext } from "./components/appcontext"
import {useContext} from 'react'
import { contextEmail } from "./components/contextemail"

const MainRoutes = ()=> {
    const {isLoggedIn} = useContext(AppContext)
    const {email} = useContext(contextEmail)

    return (
    <Router>
        <Routes>
            <Route path='/' element={email?<Conta/>:<Login/>}/>
            <Route path='/conta/:id' element={isLoggedIn?<Conta/>: <Login/>}/>
            <Route path='/infoconta' element={isLoggedIn?<ContaInfo/>:<Login/>}/>
        </Routes>
    </Router>
    )
}

export default MainRoutes