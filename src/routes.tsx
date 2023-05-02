import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Login from "./pages/login"
import { Conta } from "./pages/conta"
import ContaInfo from "./pages/contaInfo"
import { AppContext } from "./components/appcontext"
import {useContext} from 'react'

const MainRoutes = ()=> {
    const {isLoggedIn} = useContext(AppContext)

    return (
    <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/conta/:id' element={isLoggedIn?<Conta/>: <Login/>}/>
            <Route path='/infoconta' element={<ContaInfo/>}/>
        </Routes>
    </Router>
    )
}

export default MainRoutes