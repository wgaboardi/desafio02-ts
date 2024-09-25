import { login } from './login'

describe('login', () => {

    const mockEmail = "joao@joao.com"
    const mockPassword = "123456"
        it('Deve exibir um alert com boas vindas', async () => {
          const response = await login(mockEmail, mockPassword)
          expect(response).toBeTruthy()
        })  
    it('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await login('email@joao.com','123456')
        expect(response).toBeFalsy()
        //expect(mockNavigate).not.toHaveBeenCalledWith('/1')
        //expect(mockAlert).toHaveBeenCalledWith('Email inválido!')
    })
    it('Deve exibir um erro caso a senha seja inválida', async () => {
        const response = await login(mockEmail,'123')
        expect(response).toBeFalsy()
        //expect(mockNavigate).not.toHaveBeenCalledWith('/1')
        //expect(mockAlert).toHaveBeenCalledWith('Email inválido!')
    })

})