import { soma, multiplica } from "./soma"

describe('soma', ()=> {
    it('Deve somar 1 ao número informado', ()=> {
        const value = soma(1)
        expect(value).toBe(2)
    })

    it("Deve multiplicar o número por 2", ()=> {
        const value = multiplica(2,2)
        expect(value).toBe(4)
    })

    it("Deve multiplicaro número por 3", ()=> {
        const value = multiplica(2,3)
        expect(value).toBe(6)
    })

    it("Não deve informar um erro, com multiplicador diferente de 2 ou 3", ()=> {
        const value = multiplica(2,4)
        expect(value).toBe("Multiplicador não aceito")
    })
})