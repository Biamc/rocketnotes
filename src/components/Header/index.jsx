import { RiShutDownLine } from 'react-icons/ri';
import { Container,  Profile, Logout } from "./styles.js";
import { useNavigate } from 'react-router-dom';

import {useAuth} from '../../hooks/auth'

import {api} from '../../sevices/api'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header(){
  
  const {signOut, user} = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  
  return(
  <Container>
    <Profile to="/profile">
      <img 
        src={avatarUrl}
        alt="Foto do perfil do Usuário" />
      <div>
        <span>Bem-vindo!</span>
        <strong>{user.name}</strong>
      </div>
    </Profile>
    <Logout onClick={handleSignOut}>
      
        <RiShutDownLine/>
      
    </Logout>

  </Container>
  )
}