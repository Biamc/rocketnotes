import {FiLogIn, FiMail, FiLock} from "react-icons/fi"

import { Container, Form, Background } from './styles';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

export function SignIn () {
  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>
          Aplicação para salvar e gerenciar seus links úteis.
        </p>

        <h2>Faça seu login</h2>
        <Input  placeholder="E-mail" 
        type="text"
        ico ={FiMail}/>
        <Input  placeholder="Senha" 
        type="password"
        ico ={FiLock}/>
        <Button title="Entrar"/>
        <a href="#"> <ButtonText title="Criar Conta" isActive/></a>
       
      </Form>
      <Background/>        

    </Container>
  )
}