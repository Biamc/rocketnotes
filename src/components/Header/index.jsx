import { RiShutDownLine } from 'react-icons/ri';
import { Container,  Profile, Logout } from "./styles.js";

export function Header(){
  return(
  <Container>
    <Profile>
      <img 
        src="https://github.com/Biamc.png"
        alt="Foto do perfil do Usuário" />
      <div>
        <span>Bem-vindo!</span>
        <strong>Beatriz Machado</strong>
      </div>
    </Profile>
    <Logout>
      <RiShutDownLine/>
    </Logout>

  </Container>
  )
}