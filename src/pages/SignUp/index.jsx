import {FiLogIn, FiMail, FiLock} from "react-icons/fi"
import {BsPerson} from "react-icons/bs"

import { Container, Form, Background } from './styles';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

export function SignUp (){
  return(
    <Container>
      <Background/>
      <Form>
      <h1>Rocket Notes</h1>
        <p>
          Aplicação para salvar e gerenciar seus links úteis.
        </p>

        <h2>Crie sua conta</h2>
        <Input  placeholder="Nome"
        type="text"
        ico={BsPerson} />
        <Input  placeholder="E-mail" 
        type="text"
        ico ={FiMail}/>
        <Input  placeholder="Senha" 
        type="password"
        ico ={FiLock}/>

        <Button title="Cadastrar"/>
        <a href="#"> <ButtonText title="Voltar para o Login" isActive/></a>
      </Form>
      
    </Container>
  )
}