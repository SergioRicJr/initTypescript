import { Layout } from "./components/layout";
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Input
} from '@chakra-ui/react'
import { ButtonMy } from "./components/button";
import './globalStyle.css'
import { Header } from "./components/header";
import { Card } from "./components/card";
import { login } from "./services/login";

function App() {
  return (
    <ChakraProvider>
        <Header></Header>
        <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
          <Box backgroundColor="#FFFFFF" padding="15px" borderRadius="25px">
            <Card></Card>
            <ButtonMy onClick={login} />
          </Box>
        </Box> 
    </ChakraProvider>
  );
}

export default App;
