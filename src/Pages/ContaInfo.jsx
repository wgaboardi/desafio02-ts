import { Box, Center, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
import { useContext, useEffect ,useState} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';
import { api } from '../services/api';
import CardInfo from '../components/CardInfo/CardInfo';

const ContaInfo = () => {
  const { isLoggedIn } = useContext(AppContext)
  
  const {id} = useParams()
  const navigate = useNavigate()
  
  !isLoggedIn && navigate('/');
  
  const [userData, setUserData] = useState(null);

  //const token = localStorage.getItem('token');
  useEffect(() => {
    //const token = localStorage.getItem('token');
    //if (token) {
      const getData = async () => {
        // eslint-disable-next-line no-mixed-operators
        const data: null | UserData = await api
        setUserData(data);
    }
    getData()
    }
  , []);
  
  if (userData && id !== userData.id) {
    alert('Acesso não permitido!');
    navigate('/');
  }
  return (
    <>
    <Box w='50px' >
      <Center>
    <SimpleGrid>
      <Text>Informações da conta</Text>
    <Spacer/>  
    <CardInfo mainContent={userData?.name} content=      {userData?.email}/>
    <Spacer/>  
    <Box>
    <Link to='/conta/1'>
      <Text fontSize='xl' color='white'>Ir para conta bancária</Text>
    </Link>
    </Box>
    </SimpleGrid>
    </Center>
    </Box>
    </>
  );
};

export default ContaInfo