import { 
  Box,
} from '@chakra-ui/react'

export const Card = ( { children} : any) => {

  return(
    <Box position='relative' minHeight='91vh' backgroundColor='#021f0d' padding='25px' >
        {children}
    </Box>
  )
}