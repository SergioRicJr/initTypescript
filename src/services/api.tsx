const conta = {
    id: "1",
    email: "meuEmail@gmail.com",
    password: "123",
    name: "Sergio",
    balance: 2000.00
}

//para simular comportamento de uma api
export const api = new Promise((resolve)=> {
    setTimeout(()=>{
        resolve(conta)
    }, 3000)
})