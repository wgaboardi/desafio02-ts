import { 
  ChakraProvider,
} from '@chakra-ui/react'
import { Card } from './components/Card';
import { Layout } from './components/Layout';
import { login } from './services/login';


function App() {

  return (
    <ChakraProvider>
      <Layout>
        <Card titulo="Entrar" evento={login}/>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
