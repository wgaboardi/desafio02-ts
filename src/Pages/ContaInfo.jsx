import { Center, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ContaInfo = () => {
  return (
    <>
    <Center>
    <Text fontSize='3xl' fontWeight='bold' color='white'>
      Informações da conta -> 
    </Text>
    <br/>
    <Link to='/conta/1'>
      <Text fontSize='xl' color='white'>Ir para conta</Text>
    </Link>
    </Center>
    </>
  );
};

export default ContaInfo