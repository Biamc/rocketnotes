import { createContext, useContext, useState, useEffect } from "react";

import {api} from '../sevices/api'

export const AuthContext = createContext({})

function AuthProvider ({children}) {

  const [data, setData] = useState({})

  async function signIn({email, password}){


    try {
      const response = await api.post('/sessions', {email, password})
      const {user, token}  = response.data 

      //PARA ARMAZENAR AS INFORMAÇÕES DENTRO DO LOCALSTORAGE
      localStorage.setItem('@rocketnotes:user', JSON.stringify(user))
      //no localStorage as informações devem ser armazenadas em formato de text(string), o user é um objeto, dessa forma é necessário realizar um parse p transformar o userem uma string. Assim, utiliza-se uma funão do Json para converter isso (JSON.stringify())
      // utiliza-se o @ emseguida o nome da aplicação, para auxiliar a identifical qual aplicação
      localStorage.setItem('@rocketnotes:token', token)
      
      // a maneira de armazenar o token
      api.defaults.headers.authorization = `Bearer ${token}`
      
      setData({user, token})

    } catch (error){
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert ('Não foi possível entrar')
      }
    }
  }

   function signOut(){
    localStorage.removeItem('@rocketnotes:token')
    localStorage.removeItem('@rocketnotes:user')

    setData({})
  }

  async function updateProfile ({user, avatarFile}){
    try {

      if (avatarFile){
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileUploadForm)
        user.avatar =response.data.avatar
      }

      await api.put('/users', user)

      localStorage.setItem('@rocketnotes:user', JSON.stringify(user))
      // o set item serve tanto para vc colocar o conteudo e uma chave, no caso da chave ñ existir, bem como para substituir o conteudo de uma chave q já exista

      setData({user, token: data.token})
      alert('perfil atualizado')

    } catch (error){
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert ('Não foi possível atualizar')
      }
    }
  }

  useEffect(() =>{
    // PARA OBTER AS INFORMAÇÕES DO LOCALSTORAGE
    const token = localStorage.getItem('@rocketnotes:token')
    const user = localStorage.getItem('@rocketnotes:user')

    if(token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`

      setData({
        token,
        user:JSON.parse(user)// pega os dados do usuario que estavam armazenados num formato de texto e tranforma ele e mum objeto do tipo json
      })
    }
  }, [])
  //1ª parte: é uma arrow function q representa oq vc quer q o useEffect execute, a qual sempre ira executar apos o carregameto/renderização do componente
  // 2ª para é um vetor, q vc pode colocar o estado que vc quizer
  return (
    <AuthContext.Provider value={{
      signIn, 
      signOut,
      updateProfile,
      user: data.user
      }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export {AuthProvider, useAuth}

