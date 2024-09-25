import { useContext } from 'react'
import './Header.css'
import { 
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Spacer
} from '@chakra-ui/react'
import { AppContext } from '../AppContext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage'

export const Header  = () => {
  const context = useContext(AppContext)
  const { isLoggedIn, setIsLoggedIn } = context
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage('diobank',{login:false})
    setIsLoggedIn(false)
    navigate('/')
  }
  return(
    <Flex padding='5px'>
    <Box className='header' minH='30px'>
      <HStack>
        <Image src='/logo192.png' maxW='30px'/>      
        <Box color='white' p={2}>
          DIO BANK
        </Box>
      </HStack>
    </Box>
    {isLoggedIn && <>    
      <Spacer/>
      <Button onClick={logout}>Sair</Button>
      </>}
    </Flex>
  )
}
