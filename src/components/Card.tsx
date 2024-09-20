import { 
  AbsoluteCenter,
  Center,
  Input,
  Box,
} from '@chakra-ui/react'

import { Botao } from './Botao/Botao';

interface IButton {
  titulo: string,
  evento: any;
}

export const Card = ({ titulo, evento }: IButton) => {
  return(
    <Box position='relative' minHeight='91vh' backgroundColor='#021f0d' padding='25px'>
          <AbsoluteCenter>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' maxWidth='50vh' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            
            <Botao titulo='Entrar' funcao={evento}/>
          </Center>
        </Box>
        </AbsoluteCenter>
        </Box>
  )
}