import {FiArrowLeft, FiMail, FiLock, FiUser, FiCamera} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import { Container, Avatar, Form } from './styles';

import {Input} from '../../components/Input'
import { Button } from '../../components/Button';

export function Profile(){
  return(
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft/>
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/Biamc.png" alt="Foto do Usuário" />
          <label htmlFor="avatar">
          <FiCamera/>
          <input type="file" id="avatar" />
        </label>
        </Avatar>
        
        <Input
        placeholder="Nome"
        type="text"
        ico={FiUser}
        />
        <Input
        placeholder="E-mail"
        type="text"
        ico={FiMail}
        />
        <Input
        placeholder="Senha atual"
        type="password"
        ico={FiLock}
        />
        <Input
        placeholder="Nova senha"
        type="password"
        ico={FiLock}
        />

        <Button title="Salvar"/>
      </Form>
    </Container>
    
  )
}