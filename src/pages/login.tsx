import {
  Box,
  Center,
  ChakraProvider,
  Input
} from '@chakra-ui/react'
import { ButtonMy } from "../components/button";
import '../globalStyle.css'
import { Card } from "../components/card";
import { login } from "../services/login";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/appcontext';
import { changeLocalStorage } from '../services/storage';

function Login() {
    const [email, setEmail] = useState<string>('')  
    const {setIsLoggedIn} = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string): Promise<void> => {
        const loggedIn = await login(email)
        if(!loggedIn) {
            alert('Email inválido')
        } else {
            setIsLoggedIn(true)
            changeLocalStorage({login: true})
            navigate('/conta/1')
        }
    }

    return (
        <ChakraProvider>
            <Box minHeight="100vh" padding="25px">
                <Card>
                    {/* renderização condicional */}
                    {/* forma de usar o if dentro do retorno do react A usada está sendo outra, if ternario*/}
                    {/* {userData === null || userData === undefined && <h1>Loading</h1>} */}
                    <Center>
                        {/* <h1>Faça o login</h1>
                        {userData === null || userData === undefined?
                        <h1>Loading</h1>:
                        userData?.email
                        } */}
                    </Center>
                    <Input placeholder="email" value={email} onChange={(event)=> { setEmail(event.target.value)}} />
                    <Input placeholder="password" />
                    <ButtonMy onClick={()=> validateUser(email)} />
                </Card>
            </Box> 
            
        </ChakraProvider>
  );
}

export default Login;