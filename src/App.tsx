import { BrowserRouter } from 'react-router-dom';
import { Center, ChakraProvider  } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import AppContextProvider from './components/AppContext';
import MainRoutes from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';

function App() {

  {!getAllLocalStorage('diobank') && createLocalStorage('diobank', '{login: false}')}

  return (

    <BrowserRouter>
    <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Center backgroundColor='#021f0d' minHeight='91vh'>
                <MainRoutes/>
            </Center>
            </Layout>
      </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
