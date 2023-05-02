import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {
  ChakraProvider,
} from '@chakra-ui/react'
import Login from './pages/login'
import { Conta } from './pages/conta'
import { Layout } from './components/layout'
import ContaInfo from './pages/contaInfo'
import { AppContextProvider } from './components/appcontext'


const App = () => {
  return (
    <AppContextProvider>
      <ChakraProvider>
          <Layout>
            <Router>
              <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/conta/:id' element={<Conta/>}/>
                <Route path='/infoconta' element={<ContaInfo/>}/>
              </Routes>
            </Router>
          </Layout>
      </ChakraProvider>
    </AppContextProvider>
  )
}

export default App

