import { Box, Center, Divider, Spinner, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { IUserData } from '../components/card/interfaces'
import { useEffect, useState } from 'react'
import {api} from '../services/api'

const ContaInfo = () => {
  const [userData, setUserData] = useState<IUserData>()
    
    console.log(userData)
    useEffect(()=>{
        const getData = async ()=> {
        const dados = await api as IUserData
        setUserData(dados)
        }
        getData()
    }, [])

  return (
    <>
        <Center display='flex' flexDirection='column'>
          <Text fontSize='3xl' fontWeight='bold'>
              Informações da conta
          </Text>
          <Divider></Divider> 
            <Box display='inline-flex' height='50px' width='400px' backgroundColor='white' alignItems='center' justifyContent='center'>
                email: {userData==null||userData==undefined?<Center><Spinner/></Center>:<p>{userData?.email}</p>}
            </Box>
            <Box display='inline-flex' height='50px' width='400px' backgroundColor='white' alignItems='center' justifyContent='center'>
                name:{userData==null||userData==undefined?<Center><Spinner/></Center>:<p>{userData?.name}</p>}
            </Box>
            <Box display='inline-flex' height='50px' width='400px' backgroundColor='white' alignItems='center' justifyContent='center'>
                saldo: {userData==null||userData==undefined?<Center><Spinner/></Center>:<p>{userData?.balance}</p>}
            </Box>
            <Box border='darkgreen' display='inline-flex' height='50px' width='400px' backgroundColor='white' alignItems='center' justifyContent='center'>
                senha: {userData==null||userData==undefined?<Center><Spinner/></Center>:<p>{userData?.password}</p>}
            </Box>
          <Link to="/conta/1">
              <Text fontSize="xl">
                  voltar
              </Text>
          </Link>
        </Center>
    </>
  )
}

export default ContaInfo
