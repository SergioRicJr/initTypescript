import { Box } from '@chakra-ui/react'
import React from 'react'
import { Header } from '../header'

export const Layout = ({children}: any) => {
  
  return (
      <Box backgroundColor="#9413dc" height="100vh">
      <Header></Header>
      {children}
    </Box>
  )
}
