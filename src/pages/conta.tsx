import { Box, Button, Center, SimpleGrid, Spinner } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { CardInfo } from '../components/cardInfo'
import { api } from '../services/api'
import { IUserData } from '../components/card/interfaces'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../components/appcontext'

export const Conta = () => {
    const [userData, setUserData] = useState<null|IUserData>()
    
    console.log(userData)
    useEffect(()=>{
        const getData = async ()=> {
        const dados = await api as IUserData
        setUserData(dados)
        }
        getData()
    }, [])

    const {id} = useParams()
    console.log(id)
    const nav = useNavigate()
    // if(id !== userData?.id) {
    //     nav("/")
    // }

    const {user, isLoggedIn} = useContext(AppContext)
    //se não estiver logado vai ser redirecionado para "/"
    //FUNCIONA COMO UM IF
    !isLoggedIn && nav("/")

    const actualDate = new Date()

    return (
        <Box>
            <Center marginBottom='30px'>
                <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                    {
                        userData === null || userData === undefined? <Center><Spinner size='xl' color='white'/></Center>:
                        <>
                            <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${actualDate.getDay()}/${actualDate.getMonth()}/${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()}`} />
                            <CardInfo mainContent={`Salvo`} content={`R$ ${userData?.balance.toString()}`} />
                        </>
                    }
                </SimpleGrid>
            
            </Center>
            <Center>
                <Button onClick={()=> nav("/infoconta")}>Info</Button>
            </Center>
        </Box>
  )
}
