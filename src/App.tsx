import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Conta from './Pages/Conta';
import { Center, ChakraProvider  } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import ContaInfo from './Pages/ContaInfo';

function App() {

  return (

    <BrowserRouter>
        <ChakraProvider>
          <Layout>
            <Center backgroundColor='#021f0d' minHeight='91vh'>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/conta/:id" element={<Conta />}></Route>
              <Route path="/containfo" element={<ContaInfo />}></Route>
            </Routes>
            </Center>
            </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
