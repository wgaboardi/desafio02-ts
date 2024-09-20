import './Header.css'
import { 
  Box,
  HStack,
  Image
} from '@chakra-ui/react'

export const Header  = () => {
  return(
    <Box className='header' minH='30px'>
      <HStack>
        <Image src='./logo192.png' maxW='30px'/>      
        <Box color='white' p={2}>
          DIO BANK
        </Box>
      </HStack>
    </Box>
  )
}
