import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from './storage'

const dioBank = {
  login: false
}
describe('storage', () => {
  const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
  it('Deve retornar objeto localstorage com a chave diobank', () => {
    getAllLocalStorage()
    expect(mockGetItem).toHaveBeenCalledWith('diobank')
  }
  )
  it('Deve criar o objeto no  local storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    createLocalStorage()
    expect(mockSetItem).toHaveBeenCalledWith('diobank',JSON.stringify(dioBank))
  })

  it('Deve alterar o objeto no  local storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    changeLocalStorage(dioBank)
    expect(mockSetItem).toHaveBeenCalledWith('diobank',JSON.stringify(dioBank))
  })

})  
