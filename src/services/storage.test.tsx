import { changeLocalStorage, createLocalStorage, dioBank, getAllLocalStorage } from "./storage"

describe('storage', ()=> {

    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    const getItem = jest.spyOn(Storage.prototype, 'getItem')
    it("deve retornar o objeto localStorage", ()=> {
        getAllLocalStorage()
        expect(getItem).toHaveBeenCalled()
    })

    it("deve criar o objeto no localStorage", ()=> {
        const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    it("Deve alterar o valor de objeto no localStorage", ()=>{
        const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})