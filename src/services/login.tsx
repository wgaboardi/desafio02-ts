//import { useContext } from 'react'

import { api } from '../services/api'
//import { AppContext } from '../components/AppContext'
//import { useNavigate } from 'react-router-dom'
export const login = async (email: string, password: string): Promise< boolean> => {
    //const { setIsLoggedIn } = useContext(AppContext)
    //const navigate = useNavigate()
    const data: any = await api
    if (email !== data.email) {
        //return alert('Email inválido!')
        return false 
    }
    if (password !== data.password) {
        //return alert('Password inválido!')
        return false 
    }
    return true;
    //setIsLoggedIn(true)
    //navigate(`/${data.id}`)
}
