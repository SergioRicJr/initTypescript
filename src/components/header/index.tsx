import { Box, Button, Center, Text } from '@chakra-ui/react'
import './styles.css'
import { useContext } from 'react'
import { AppContext } from '../appcontext'

export const Header  = () => {
  const context = useContext(AppContext)
  console.log(context)

  return(
    <Box backgroundColor='orange' width='100%'>
      <Center>
        <Text fontSize='3xl'>Dio Bank</Text>
      </Center>
      <Button>
        Sair
      </Button>
    </Box>
  )
}
