const credencial = {
  email: 'joao@joao.com',
  password: '123456',
  name: 'Joao',
  balance: 2000.23,
  id: '1'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(credencial);
  }, 3000);

})

