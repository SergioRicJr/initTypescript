import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {
  ChakraProvider,
} from '@chakra-ui/react'
import Login from './pages/login'
import { Conta } from './pages/conta'
import { Layout } from './components/layout'
import ContaInfo from './pages/contaInfo'
import { AppContextProvider } from './components/appcontext'
import MainRoutes from './routes'
import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from './services/storage'
import ContextEmailProvider from './components/contextemail/index'

const App = () => {
  if (!getAllLocalStorage()) {
    createLocalStorage()
  }

  return (
      <AppContextProvider>
        <ContextEmailProvider>
          <ChakraProvider>
              <Layout>
                <MainRoutes/>
              </Layout>
          </ChakraProvider>
        </ContextEmailProvider>
      </AppContextProvider>
  )
}

export default App

