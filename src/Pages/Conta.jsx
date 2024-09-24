/* eslint-disable react-hooks/exhaustive-deps */
import { api } from '../services/api';
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import { Center, SimpleGrid, Spinner } from '@chakra-ui/react';
import CardInfo from '../components/CardInfo/CardInfo';
import { AppContext } from '../components/AppContext';


interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
}

const Conta = () => {
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

  const actualDate = new Date();
  return (
    <Center>
      <SimpleGrid columns={2} spacing={10}>
        {userData === undefined ||  userData === null ? (
          <Spinner color='white' size='xl'/>
        ) : (
          <>
        <CardInfo mainContent={`Bem-vindo(a) ${userData?.name}`} content={`${actualDate.getDay()} / ${actualDate.getMonth()} / ${actualDate.getFullYear()} ${actualDate.getHours()} : ${actualDate.getMinutes()}`} />
        <CardInfo mainContent="Saldo" content={`R$ ${userData?.balance}`} />
        </>
        )
        }
      </SimpleGrid>
    </Center>
  );
}

export default Conta;