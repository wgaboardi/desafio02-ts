import './Footer.css'
import { 
  Box, Center
} from '@chakra-ui/react'

export const Footer  = () => {
  return(
    <Center>
    <Box minWidth='50vh' color='yellow' className='footer' borderWidth='1px' borderRadius='lg' marginTop='2px' padding='3px'>
      <Center>IT4Smart - Todos os direitos reservados @ 2024</Center>
    </Box>
    </Center>
  )
}
