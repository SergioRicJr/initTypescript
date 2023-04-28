import React from 'react'
import { login } from '../../services/login'
import { Button, Center } from '@chakra-ui/react'

interface IButtonMy {
  onClick: ()=> void
}

export const ButtonMy = ({onClick}:IButtonMy) => {
  return (
    <Center>
      <Button colorScheme="teal" size="sm" width="100%" marginTop="5px" onClick={onClick}>
        Button
      </Button>
    </Center>
  )
}
