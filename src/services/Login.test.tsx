import { login } from './login'

//const mockSetIsLoggedIn = jest.fn()
//const mockNavigate = jest.fn()

//jest.mock('react', () => ({
     //...jest.requireActual('react'),
     //useContext: () => ({
        //setIsLoggedIn: mockSetIsLoggedIn
     //})})
//)

//jest.mock('react-router-dom', () => ({
    //...jest.requireActual('react-router-dom') as any,
    //useNavigate: () => mockNavigate}
//))


describe('login', () => {

    //const mockAlert = jest.fn()
    const mockEmail = "joao@joao.com"
    //window.alert = mockAlert

    //it('Deve exibir um alert com boas vindas', async () => {
      //  await login(mockEmail)
//        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        //expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
        //expect(mockNavigate).toHaveBeenCalledWith('/1')
    //})
        it('Deve exibir um alert com boas vindas', async () => {
          const response = await login(mockEmail)
          expect(response).toBeTruthy()
        })  
        //expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
        //expect(mockNavigate).toHaveBeenCalledWith('/1')
    //})
    //it('Nao deve exibir a mensagem de boas vindas sem o email', async () => {
        //await login(mockEmail)
        //expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        //expect(mockAlert).not.toHaveBeenCalledWith(`Bem vindo!`)
    //})

    //it('Deve exibir um erro caso o email seja inválido', async () => {
        //await login('email@joao.com')
        //expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
        //expect(mockNavigate).not.toHaveBeenCalledWith('/1')
        //expect(mockAlert).toHaveBeenCalledWith('Email inválido!')
    //})
    it('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await login('email@joao.com')
        expect(response).toBeFalsy()
        //expect(mockNavigate).not.toHaveBeenCalledWith('/1')
        //expect(mockAlert).toHaveBeenCalledWith('Email inválido!')
    })
})