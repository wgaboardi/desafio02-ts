
import { Card } from '../components/Card/Card';
import { useContext, useState } from 'react';

import { AbsoluteCenter, Box, Center, Input } from '@chakra-ui/react';
import { Botao } from '../components/Botao/Botao';
import { login } from '../services/login';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';
import { changeLocalStorage } from '../services/storage';


const Home = () => {
  const { setIsLoggedIn, user } = useContext(AppContext)
  console.log('context', useContext(AppContext))
  const [email, setEmail] = useState(user)
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

   
  const validateUser = async (email: string, password: string) =>{
      const loggedIn = await login(email, password)
      if (!loggedIn) {
        return alert('Email ou Senha inválida!')
      }
      setIsLoggedIn(true)
      changeLocalStorage('diobank',{ login: true})
      changeLocalStorage('diouser',{ email: email })
      return navigate('/conta/1')
  }

  return (
    <Card>
      <AbsoluteCenter>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' width='40vh' >
          <Center>
            <h1>Faça o login </h1>
          </Center>
          
          <Input placeholder="email" type="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
          <Input placeholder="password" type="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
          <Center>
            <Botao titulo='Entrar' onClick={() => validateUser(email, password)}/>
          </Center>
        </Box>
       </AbsoluteCenter>
    </Card>    

  );
}

export default Home