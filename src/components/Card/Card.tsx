import { 
  AbsoluteCenter,
  Center,
  Input,
  Box,
} from '@chakra-ui/react'

import { Botao } from '../Botao/Botao';
import { useState } from 'react';
import { login } from '../../services/login';

export const Card = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
   // Funcao nomeada é mais performática do que função anônima
  const handleLogin = () => {
    login(email);
  };

  return(
    <Box position='relative' minHeight='91vh' backgroundColor='#021f0d' padding='25px' >
          <AbsoluteCenter>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' width='40vh' >
          <Center>
            <h1>Faça o login </h1>
          </Center>
          
          <Input placeholder="email" type="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
          <Input placeholder="password" type="password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
          <Center>
            <Botao titulo='Entrar' onClick={handleLogin}/>
          </Center>
        </Box>
        </AbsoluteCenter>
        </Box>
  )
}