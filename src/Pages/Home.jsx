
import { Card } from '../components/Card/Card';
import { useContext, useState } from 'react';

import { AbsoluteCenter, Box, Center, Input } from '@chakra-ui/react';
import { Botao } from '../components/Botao/Botao';
import { login } from '../services/login';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';
import { changeLocalStorage } from '../services/storage';


const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

   
  const validateUser = async (email: string) =>{
      const loggedIn = await login(email)
      if (!loggedIn) {
        return alert('Email inválido!')
      }
      setIsLoggedIn(true)
      changeLocalStorage({ login: true})
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
            <Botao titulo='Entrar' onClick={() => validateUser(email)}/>
          </Center>
        </Box>
       </AbsoluteCenter>
    </Card>    

  );
}

export default Home