import { login } from "./login"

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', ()=> ({
    ...jest.requireActual('react'),
    useContext: ()=> ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> ({
        navigate: mockNavigate
    }) 
}))

describe("login", ()=> {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    const mockEmail = 'meuEmail@gmail.com'



    it("Deve exibir um alert com boas vindas", async ()=> {
        const response = await login(mockEmail)
        expect(response).toBeTruthy()
        // expect(mockNavigate).toHaveBeenCalledWith('/1')
        // expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        // expect(window.alert).toHaveBeenCalledWith("Bem vindo a minha aplicação de teste meuEmail@gmail.com")
    })

    it("Não deve exibir a mensagem de boas vindas sem o email", async ()=> {
        const response = await login('EMAIL@invalido.com')
        expect(response).toBeFalsy()
        // expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        // expect(window.alert).not.toHaveBeenCalledWith("Bem vindo a minha aplicação de teste ")
    })

    // it("Deve exibir um erro caso o email seja inválido", async ()=> {
    //     await login("Deve exibir erro caso o email seja inválido")
    //     expect(window.alert).toHaveBeenCalledWith("Email inválido")
    // })
})