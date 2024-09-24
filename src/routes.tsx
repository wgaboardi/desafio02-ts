import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Conta from './Pages/Conta';
import ContaInfo from './Pages/ContaInfo';
import { useContext } from 'react';
import { AppContext } from './components/AppContext';

const  MainRoutes = () =>
{
  const { isLoggedIn } = useContext(AppContext)
  return (
    
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home/>}></Route>
    <Route path="/containfo" element={isLoggedIn ? <ContaInfo /> : <Home/>}></Route>
  </Routes>

  )
}

export default MainRoutes