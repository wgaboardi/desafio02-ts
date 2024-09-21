import { login } from '../../services/login'


describe('card', () => {

    const mockAlert = jest.fn()
    const mockEmail = "joao@joao.com"
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', async () => {
        await login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
    })
    it('Nao deve exibir a mensagem de boas vindas sem o email', async () => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith(`Bem vindo!`)
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        await login('email@joao.com')
        expect(mockAlert).toHaveBeenCalledWith('Email inválido!')
    })

})