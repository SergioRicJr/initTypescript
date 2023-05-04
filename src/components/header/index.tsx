import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import './styles.css'
import { useContext } from 'react'
import { AppContext } from '../appcontext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage'

export const Header  = () => {
  const {isLoggedIn,setIsLoggedIn} = useContext(AppContext)
  
  return(
    <Flex backgroundColor='orange' padding='5px'> 
      <Box>
        <Center>
          <Text fontSize='3xl'>Dio Bank</Text>
        </Center>
      </Box>
      
      {
        
          
          isLoggedIn && (
            <>
            {/* funciona como um space between */}
            <Spacer/>
            <Button onClick={()=> {
              changeLocalStorage({login: false})
              localStorage.removeItem("infoUserLogado")
              setIsLoggedIn(false)
              }
            } >
              Sair
            </Button>
            </>
        )
      }
    </Flex>
  )
}
